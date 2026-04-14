
-- Drop and recreate DELETE and UPDATE policies to use folder-based ownership
DROP POLICY IF EXISTS "Users can delete own files in videos" ON storage.objects;
DROP POLICY IF EXISTS "Users can update own files in videos" ON storage.objects;

CREATE POLICY "Users can delete own files in videos"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'videos'
  AND auth.role() = 'authenticated'
  AND (storage.foldername(name))[1] = auth.uid()::text
);

CREATE POLICY "Users can update own files in videos"
ON storage.objects
FOR UPDATE
USING (
  bucket_id = 'videos'
  AND auth.role() = 'authenticated'
  AND (storage.foldername(name))[1] = auth.uid()::text
);
