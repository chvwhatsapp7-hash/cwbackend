
import { listTemplates, createTemplate, updateTemplate, deleteTemplateById } from '../../../lib/templatesStore';

export default function handler(req, res){
  if(req.method === 'GET'){
    res.status(200).json(listTemplates());
    return;
  }

  if(req.method === 'POST'){
    const data = req.body || {};
    const tmpl = createTemplate(data);
    res.status(201).json({ message: 'Template saved', template: tmpl });
    return;
  }

  if(req.method === 'PUT'){
    const { id } = req.query;
    const data = req.body || {};
    const updated = updateTemplate(id, data);
    if(!updated) return res.status(404).json({ message: 'Not found' });
    res.status(200).json({ message: 'Template updated', template: updated });
    return;
  }

  if(req.method === 'DELETE'){
    const { id } = req.query;
    deleteTemplateById(id);
    res.status(200).json({ message: 'Deleted' });
    return;
  }

  res.status(405).json({ message: 'Method not allowed' });
}
