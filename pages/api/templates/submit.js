import { submitTemplateById } from '../../../lib/templatesStore';

export default function submitHandler(req, res){
  if(req.method !== 'POST') return res.status(405).end();
  const { id } = req.query;
  const tpl = submitTemplateById(id);
  if(!tpl) return res.status(404).json({ message: 'Template not found' });
  res.status(200).json({ message: 'Template submitted for approval', template: tpl });
}
