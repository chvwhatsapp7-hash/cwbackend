// backend/pages/api/admin/stats.ts
import { prisma } from '../../../generated/prisma';

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // ===== 1️⃣ Admin Stats =====
    const totalClients = await prisma.user.count({
      where: { role: 'client' }
    });
    const activeClients = await prisma.user.count({
      where: { role: 'client', status: 1 }
    });
    const totalMessages = await prisma.message.count();

    // System Health: % of delivered messages
    const totalReceipts = await prisma.messageReceipt.count();
    const deliveredReceipts = await prisma.messageReceipt.count({
      where: { delivered_at: { not: null } }
    });
    const systemHealth = totalReceipts
      ? ((deliveredReceipts / totalReceipts) * 100).toFixed(1) + "%"
      : "0%";

    // ===== 2️⃣ Recent Activity (past 3 days) =====
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

    const recentMessages = await prisma.message.findMany({
      where: { created_at: { gte: threeDaysAgo }, user: { role: 'client' } },
      orderBy: { created_at: 'desc' },
      take: 5,
      select: { message: true, created_at: true }
    });

    const recentCampaigns = await prisma.campaign.findMany({
      where: { createdON: { gte: threeDaysAgo }, user: { role: 'client' } },
      orderBy: { createdON: 'desc' },
      take: 5,
      select: { campaignid: true, createdON: true }
    });

    const recentTemplates = await prisma.template.findMany({
      where: { created_at: { gte: threeDaysAgo }, user: { role: 'client' } },
      orderBy: { created_at: 'desc' },
      take: 5,
      select: { template_name: true, created_at: true }
    });

    const recentActivities = [
      ...recentMessages.map(m => `Message: "${m.message}" (${m.created_at.toISOString()})`),
      ...recentCampaigns.map(c => `Campaign created (ID: ${c.campaignid}) (${c.createdON.toISOString()})`),
      ...recentTemplates.map(t => `Template: "${t.template_name}" (${t.created_at.toISOString()})`),
    ]
      .sort((a, b) => new Date(b.split("(")[1].replace(")", "")) - new Date(a.split("(")[1].replace(")", "")))
      .slice(0, 10); // latest 10 activities

    // ===== 3️⃣ Send Response =====
    return res.status(200).json({
      totalClients,
      activeClients,
      totalMessages,
      systemHealth,
      recentActivities,
    });

  } catch (error) {
    console.error("Error fetching admin stats:", error);
    return res.status(500).json({ message: "Failed to fetch admin stats", error: error.message });
  }
}