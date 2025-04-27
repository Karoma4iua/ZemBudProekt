/*
  # Add likes and dislikes to projects

  1. New Tables
    - `project_reactions`
      - `id` (uuid, primary key)
      - `project_id` (integer, required)
      - `reaction_type` (text, required) - either 'like' or 'dislike'
      - `created_at` (timestamp with timezone)

  2. Security
    - Enable RLS on `project_reactions` table
    - Add policies for:
      - Anyone can read reactions
      - Anyone can create reactions
      - Anyone can delete their own reactions
*/

CREATE TABLE IF NOT EXISTS project_reactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id integer NOT NULL,
  reaction_type text NOT NULL CHECK (reaction_type IN ('like', 'dislike')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE project_reactions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read reactions
CREATE POLICY "Anyone can read reactions"
  ON project_reactions
  FOR SELECT
  TO public
  USING (true);

-- Allow anyone to create reactions
CREATE POLICY "Anyone can create reactions"
  ON project_reactions
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow anyone to delete reactions
CREATE POLICY "Anyone can delete reactions"
  ON project_reactions
  FOR DELETE
  TO public
  USING (true);