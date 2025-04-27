/*
  # Create comments table for projects

  1. New Tables
    - `comments`
      - `id` (uuid, primary key)
      - `project_id` (integer, required)
      - `user_name` (text, required)
      - `content` (text, required)
      - `created_at` (timestamp with timezone)

  2. Security
    - Enable RLS on `comments` table
    - Add policies for:
      - Anyone can read comments
      - Anyone can create comments
*/

CREATE TABLE IF NOT EXISTS comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id integer NOT NULL,
  user_name text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read comments
CREATE POLICY "Anyone can read comments"
  ON comments
  FOR SELECT
  TO public
  USING (true);

-- Allow anyone to create comments
CREATE POLICY "Anyone can create comments"
  ON comments
  FOR INSERT
  TO public
  WITH CHECK (true);