import type { RequestHandler } from "@sveltejs/kit";
import { api } from "./_api";

export const del: RequestHandler = async (request) => {
  return api(request);
}

export const patch = async (request) => {
  const formData = await request.request.formData();
  return api(request, {
    text: formData.get('text') as string,
    done: formData.has('done') ? !!formData.get('done') : undefined
  })
}