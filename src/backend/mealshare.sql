mysql://be6ffdb9640f28:16729d24@eu-cdbr-west-01.cleardb.com/heroku_0c7ebc3a6fd792c?reconnect=true
mysql://{user}:{pass}@{host}/{database}
DROP SCHEMA heroku_0c7ebc3a6fd792c;
CREATE SCHEMA heroku_0c7ebc3a6fd792c;
USE heroku_0c7ebc3a6fd792c;
CREATE TABLE meals(id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
				  title VARCHAR(255) NULL,
				 description TEXT NULL,
                 location VARCHAR(255) NULL,
                 `when` DATETIME NULL,
                 max_reservations INT NULL,
                 price DECIMAL NULL,
                 created_date DATETIME DEFAULT CURRENT_TIMESTAMP);
-- Creating table Reservation
CREATE TABLE reservations(id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
						 number_of_guests INT NULL,
                         meal_id INT(11) UNSIGNED NOT NULL,
                         created_date DATETIME DEFAULT CURRENT_TIMESTAMP,
                         contact_phonenumber VARCHAR(30) NULL,
                         contact_name VARCHAR(255) NULL,
                         contact_email VARCHAR(255) NULL,
                         FOREIGN KEY (meal_id) REFERENCES meals(id) ON DELETE CASCADE);
-- Creating table review
CREATE TABLE reviews(id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
				    title VARCHAR(255) NULL,
                    description TEXT NULL,
                    meal_id INT(11) UNSIGNED NOT NULL,
                    stars INT(11) NULL,
                    created_date DATETIME DEFAULT CURRENT_TIMESTAMP,
                    FOREIGN KEY (meal_id) REFERENCES meals(id) ON DELETE CASCADE);
INSERT INTO meals (id,title, description,location, `when`, max_reservations, price)
 VALUES(1,'Italian Pasta With Dessert', 'Spinach ravioli with a fresh tomato sauce and Tiramisu','Valby','2021-06-02 19:30:00',20,150); 
INSERT INTO meals (id,title, description,location, `when`, max_reservations, price)
 VALUES(2,'Chicken stew with appam','Chicken stew with south indian pancake', 'Bagsværd', '2021-05-29 09:00:00', 25, 75),
 (3,'Mexican Shrimp Tacos','Crispy cheesy shrimp tacos and homemade salsa', 'Brøndby', '2021-06-14 18:30:00', 20, 125); 
 INSERT INTO meals (id,title, description,location, `when`, max_reservations, price)
 VALUES(4,'Baklava and Sfouf Cake','Baklava which is pastry layered with chopped nuts and sweetened with syrup, Sfouf Cake which is almond-semolina cake', 'Hedehusene', '2021-05-30 17:00:00', 15, 90),
 (5,'Risotto with shrimp','Risotto with shrimp lemon and rosemary', 'Ballerup', '2021-06-20 19:30:00', 25, 250),
 (6,'SouthIndian Breakfast', 'Dosa (made with lentils and rice batter) with Peanut sause','Søborg','2021-06-14 08:30:00', 120, 25),
  (7,'Steamed Momos & Choyla','Steamed Momos, one of the most popular dishes in Nepal Choyla, a traditional Nepali spiced meat dish', 'København','2021-06-14 18:30:00', 25, 170),
  (8,'Kadai Paneer with Naan','Indian curry made with paneer (cottage cheese), tomato, butter and cashew sauce and with Indian flatbread', 'hvidovre', '2021-07-02 19:30:00', 25, 220)  
  ;  

INSERT INTO reservations (number_of_guests,meal_id,contact_phonenumber,contact_name,contact_email)
 VALUES(4,1,'12 43 65 78', 'Mette','mette@gmail.com'); 
INSERT INTO reservations (number_of_guests,meal_id,contact_phonenumber,contact_name,contact_email)
 VALUES(5,3,'28 74 93 74', 'Chris','chris@gmail.com'); 
 INSERT INTO reservations (number_of_guests,meal_id,contact_phonenumber,contact_name,contact_email)
 VALUES
(6,2,'98 34 73 74', 'katie','katie@gmail.com'),
(5,6,'22 72 23 14', 'Marianna','mas@gmail.com'),
(8,3,'18 14 33 24', 'Daniel','daniel@gmail.com'),
(7,3,'21 12 83 14', 'Lucy','lucy@gmail.com'),
(7,5,'18 14 23 24', 'Jade Parker','jade@gmail.com') ; 

INSERT INTO reviews (id,title,description,meal_id,stars)
 VALUES
(1,'Spinach ravioli','It was very delicious',1,4),
(2,'Chicken stew With appam','Delicious breakfast',2,5),
(3,'Tacos','very authentic, tasty',3,3),
(4,'Dosa','Tried for first time, loved the taste of it',6,5),
(5,'paneer with naan','So nice',8,4),
(6,'Tacos','Enjoyed so much',3,5);


-- DB_HOST = eu-cdbr-west-01.cleardb.com
--  127.0.0.1 
-- DB_USER = root
-- DB_PASSWORD = password
-- DB_NAME = mealsharing
-- DB_PORT = 3306

