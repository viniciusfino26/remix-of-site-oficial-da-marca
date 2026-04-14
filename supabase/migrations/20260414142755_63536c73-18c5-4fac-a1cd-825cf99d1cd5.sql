
-- Remove existing overly permissive policies on storage.objects for videos bucket
DROP POLICY IF EXISTS "Authenticated users can upload videos" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete videos" ON storage.objects;
DROP POLICY IF EXISTS "Public users can view videos" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can view videos" ON storage.objects;

-- Recreate with proper ownership checks
-- Public read access (bucket is public)
CREATE POLICY "Public read access for videos"
ON storage.objects
FOR SELECT
USING (bucket_id = 'videos');

-- Upload restricted to user's own folder
CREATE POLICY "Users can upload to own folder in videos"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'videos'
  AND auth.role() = 'authenticated'
  AND (storage.foldername(name))[1] = auth.uid()::text
);

-- Delete restricted to file owner
CREATE POLICY "Users can delete own files in videos"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'videos'
  AND auth.uid() = owner
);

-- Update restricted to file owner
CREATE POLICY "Users can update own files in videos"
ON storage.objects
FOR UPDATE
USING (
  bucket_id = 'videos'
  AND auth.uid() = owner
);
