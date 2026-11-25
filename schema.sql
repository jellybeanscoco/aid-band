CREATE TABLE IF NOT EXISTS people (
  band_id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  sex TEXT DEFAULT '',
  age TEXT DEFAULT '',
  ethnicity TEXT DEFAULT '',
  eye_color TEXT DEFAULT '',
  height TEXT DEFAULT '',
  weight TEXT DEFAULT '',
  blood_type TEXT DEFAULT '',
  status TEXT NOT NULL,
  shelter TEXT DEFAULT '',
  area TEXT DEFAULT '',
  latitude REAL,
  longitude REAL,
  history TEXT DEFAULT '',
  medications TEXT DEFAULT '',
  allergies TEXT DEFAULT '',
  photo TEXT DEFAULT '',
  home_address TEXT DEFAULT '',
  emergency_contacts TEXT DEFAULT '[]',
  updated_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_people_status ON people (status);
