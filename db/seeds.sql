USE doneboard_db;

INSERT INTO Users (first_name, last_name, username, email, phone_number)
VALUES ("Jordan", "McQuiston", "JordanCley","jordan@thehnrl.com", "7652528980"),
        ("Brandon", "Thomas", "Brando45","Brando@thehnrl.com", "7658646654"),
        ("Noah", "Landon", "NoahsArk","THeARk@thehnrl.com", "7658632454"),
        ("Kent", "Linder", "Kenny123","Ktest.com", "765834554"),
        ("Simon", "Mendoza", "SimMendoz","Simon@aol.com", "3124567890");

INSERT INTO Tasks (name, content, progress_status, ProjectId, UserId)
VALUES ("finish project", "Lorem, ipsum dolor sit amet", 0, 1, 4),
        ("testing", "Lorem, ipsum dolor sit amet lah blah", 1, 3, 2),
        ("still testing", "Lorem, ipsum dolor sit amet yadyadyayda", 2, 2, 3);