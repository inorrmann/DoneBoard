USE doneboard_db;

INSERT INTO User_Project_Relationships ()
VALUES (),(),();

INSERT INTO Users (first_name, last_name, username, password, email, phone_number, UserProjectRelationshipId)
VALUES ("Jordan", "McQuiston", "JordanCley","1234567","jordan@thehnrl.com", "7652528980", 1),
        ("Brandon", "Thomas", "Brando45","7654321","Brando@thehnrl.com", "7658646654", 2);

INSERT INTO Projects (title, UserProjectRelationshipId)
VALUES ("Project1", 1), ("Project2", 2), ("Project3", 3);

INSERT INTO Tasks (name, content, progress_status, ProjectId, UserId)
VALUES ("Create database", "lorem23 dgsljnsdg sdlgksdjg sdjglsdgl kdjfgsldgj", 0, 1, 1),
        ("Create routes", "lorem23 dgsljnsdg sdlgksdjg sdjglsdgl kdjfgsldgj", 0, 2, 2);