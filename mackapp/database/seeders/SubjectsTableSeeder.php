<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubjectsTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('subjects')->insert([
            // Information Technology - 1st Year
            ['course' => 'Information Technology', 'year' => '1st year', 'subject_name' => 'Introduction to Information Technology IT101', 'tuition_fee' => 500.00, 'professor' => 'Dr. John Smith', 'room' => 'Room 101'],
            ['course' => 'Information Technology', 'year' => '1st year', 'subject_name' => 'Fundamentals of Programming IT102', 'tuition_fee' => 600.00, 'professor' => 'Prof. Jane Doe', 'room' => 'Room 102'],
            ['course' => 'Information Technology', 'year' => '1st year', 'subject_name' => 'Digital Logic Design IT103', 'tuition_fee' => 550.00, 'professor' => 'Dr. Michael Brown', 'room' => 'Room 103'],
            ['course' => 'Information Technology', 'year' => '1st year', 'subject_name' => 'Discrete Mathematics IT104', 'tuition_fee' => 520.00, 'professor' => 'Prof. Susan White', 'room' => 'Room 104'],
            ['course' => 'Information Technology', 'year' => '1st year', 'subject_name' => 'Computer Networks IT105', 'tuition_fee' => 580.00, 'professor' => 'Dr. Robert Black', 'room' => 'Room 105'],
            ['course' => 'Information Technology', 'year' => '1st year', 'subject_name' => 'Database Management Systems IT106', 'tuition_fee' => 600.00, 'professor' => 'Prof. Linda Green', 'room' => 'Room 106'],
            ['course' => 'Information Technology', 'year' => '1st year', 'subject_name' => 'Web Technologies IT107', 'tuition_fee' => 570.00, 'professor' => 'Dr. William Red', 'room' => 'Room 107'],
            ['course' => 'Information Technology', 'year' => '1st year', 'subject_name' => 'Introduction to Data Science IT108', 'tuition_fee' => 650.00, 'professor' => 'Prof. Emily Blue', 'room' => 'Room 108'],
    
            // Information Technology - 2nd Year
            ['course' => 'Information Technology', 'year' => '2nd year', 'subject_name' => 'Object-Oriented Programming IT201', 'tuition_fee' => 700.00, 'professor' => 'Dr. David Yellow', 'room' => 'Room 201'],
            ['course' => 'Information Technology', 'year' => '2nd year', 'subject_name' => 'Data Structures and Algorithms IT202', 'tuition_fee' => 750.00, 'professor' => 'Prof. Laura Pink', 'room' => 'Room 202'],
            ['course' => 'Information Technology', 'year' => '2nd year', 'subject_name' => 'Software Engineering IT203', 'tuition_fee' => 720.00, 'professor' => 'Dr. George Gray', 'room' => 'Room 203'],
            ['course' => 'Information Technology', 'year' => '2nd year', 'subject_name' => 'Operating Systems IT204', 'tuition_fee' => 740.00, 'professor' => 'Prof. Nancy Silver', 'room' => 'Room 204'],
            ['course' => 'Information Technology', 'year' => '2nd year', 'subject_name' => 'Computer Architecture IT205', 'tuition_fee' => 710.00, 'professor' => 'Dr. Kevin Gold', 'room' => 'Room 205'],
            ['course' => 'Information Technology', 'year' => '2nd year', 'subject_name' => 'Human-Computer Interaction IT206', 'tuition_fee' => 760.00, 'professor' => 'Prof. Megan Bronze', 'room' => 'Room 206'],
    
            // Information Technology - 3rd Year
            ['course' => 'Information Technology', 'year' => '3rd year', 'subject_name' => 'Machine Learning IT301', 'tuition_fee' => 800.00, 'professor' => 'Dr. Daniel Copper', 'room' => 'Room 301'],
            ['course' => 'Information Technology', 'year' => '3rd year', 'subject_name' => 'Artificial Intelligence IT302', 'tuition_fee' => 820.00, 'professor' => 'Prof. Olivia Platinum', 'room' => 'Room 302'],
            ['course' => 'Information Technology', 'year' => '3rd year', 'subject_name' => 'Cyber Security IT303', 'tuition_fee' => 840.00, 'professor' => 'Dr. Henry Iron', 'room' => 'Room 303'],
            ['course' => 'Information Technology', 'year' => '3rd year', 'subject_name' => 'Cloud Computing IT304', 'tuition_fee' => 830.00, 'professor' => 'Prof. Sophia Tin', 'room' => 'Room 304'],
            ['course' => 'Information Technology', 'year' => '3rd year', 'subject_name' => 'Internet of Things IT305', 'tuition_fee' => 810.00, 'professor' => 'Dr. Thomas Steel', 'room' => 'Room 305'],
            ['course' => 'Information Technology', 'year' => '3rd year', 'subject_name' => 'Data Analytics IT306', 'tuition_fee' => 850.00, 'professor' => 'Prof. Mia Nickel', 'room' => 'Room 306'],
            ['course' => 'Information Technology', 'year' => '3rd year', 'subject_name' => 'Big Data Technologies IT307', 'tuition_fee' => 860.00, 'professor' => 'Dr. James Lead', 'room' => 'Room 307'],
    
            // Information Technology - 4th Year
            ['course' => 'Information Technology', 'year' => '4th year', 'subject_name' => 'Advanced Database Systems IT401', 'tuition_fee' => 900.00, 'professor' => 'Dr. Jessica Zinc', 'room' => 'Room 401'],
            ['course' => 'Information Technology', 'year' => '4th year', 'subject_name' => 'Blockchain Technology IT402', 'tuition_fee' => 920.00, 'professor' => 'Prof. Andrew Brass', 'room' => 'Room 402'],
            ['course' => 'Information Technology', 'year' => '4th year', 'subject_name' => 'Quantum Computing IT403', 'tuition_fee' => 940.00, 'professor' => 'Dr. Mary Iron', 'room' => 'Room 403'],
            ['course' => 'Information Technology', 'year' => '4th year', 'subject_name' => 'Natural Language Processing IT404', 'tuition_fee' => 950.00, 'professor' => 'Prof. Christopher Bronze', 'room' => 'Room 404'],
            ['course' => 'Information Technology', 'year' => '4th year', 'subject_name' => 'Computer Vision IT405', 'tuition_fee' => 930.00, 'professor' => 'Dr. Patricia Silver', 'room' => 'Room 405'],
            ['course' => 'Information Technology', 'year' => '4th year', 'subject_name' => 'Ethical Hacking IT406', 'tuition_fee' => 960.00, 'professor' => 'Prof. Jennifer Gold', 'room' => 'Room 406'],
            ['course' => 'Information Technology', 'year' => '4th year', 'subject_name' => 'Capstone Project IT407', 'tuition_fee' => 1000.00, 'professor' => 'Dr. Matthew Platinum', 'room' => 'Room 407'],
    
            // Nursing - 1st Year
            ['course' => 'Nursing', 'year' => '1st year', 'subject_name' => 'Anatomy and Physiology NUR101', 'tuition_fee' => 550.00, 'professor' => 'Dr. Alice Johnson', 'room' => 'Room 201'],
            ['course' => 'Nursing', 'year' => '1st year', 'subject_name' => 'Fundamentals of Nursing NUR102', 'tuition_fee' => 600.00, 'professor' => 'Prof. Bob Brown', 'room' => 'Room 202'],
            ['course' => 'Nursing', 'year' => '1st year', 'subject_name' => 'Nutrition and Dietetics NUR103', 'tuition_fee' => 580.00, 'professor' => 'Dr. Carol Smith', 'room' => 'Room 203'],
            ['course' => 'Nursing', 'year' => '1st year', 'subject_name' => 'Biochemistry NUR104', 'tuition_fee' => 560.00, 'professor' => 'Prof. Daniel Green', 'room' => 'Room 204'],
            ['course' => 'Nursing', 'year' => '1st year', 'subject_name' => 'Microbiology NUR105', 'tuition_fee' => 590.00, 'professor' => 'Dr. Emily Black', 'room' => 'Room 205'],
            ['course' => 'Nursing', 'year' => '1st year', 'subject_name' => 'Medical-Surgical Nursing NUR106', 'tuition_fee' => 620.00, 'professor' => 'Prof. Frank White', 'room' => 'Room 206'],
            ['course' => 'Nursing', 'year' => '1st year', 'subject_name' => 'Pharmacology NUR107', 'tuition_fee' => 610.00, 'professor' => 'Dr. Grace Blue', 'room' => 'Room 207'],
            ['course' => 'Nursing', 'year' => '1st year', 'subject_name' => 'Health Assessment NUR108', 'tuition_fee' => 600.00, 'professor' => 'Prof. Henry Red', 'room' => 'Room 208'],
    
            // Nursing - 2nd Year
            ['course' => 'Nursing', 'year' => '2nd year', 'subject_name' => 'Community Health Nursing NUR201', 'tuition_fee' => 650.00, 'professor' => 'Dr. Ian Gray', 'room' => 'Room 301'],
            ['course' => 'Nursing', 'year' => '2nd year', 'subject_name' => 'Pediatric Nursing NUR202', 'tuition_fee' => 680.00, 'professor' => 'Prof. Jane Yellow', 'room' => 'Room 302'],
            ['course' => 'Nursing', 'year' => '2nd year', 'subject_name' => 'Psychiatric Nursing NUR203', 'tuition_fee' => 670.00, 'professor' => 'Dr. Kevin Pink', 'room' => 'Room 303'],
            ['course' => 'Nursing', 'year' => '2nd year', 'subject_name' => 'Obstetric Nursing NUR204', 'tuition_fee' => 690.00, 'professor' => 'Prof. Laura Silver', 'room' => 'Room 304'],
            ['course' => 'Nursing', 'year' => '2nd year', 'subject_name' => 'Pathophysiology NUR205', 'tuition_fee' => 700.00, 'professor' => 'Dr. Michael Gold', 'room' => 'Room 305'],
            ['course' => 'Nursing', 'year' => '2nd year', 'subject_name' => 'Clinical Skills NUR206', 'tuition_fee' => 710.00, 'professor' => 'Prof. Nancy Bronze', 'room' => 'Room 306'],
    
            // Nursing - 3rd Year
            ['course' => 'Nursing', 'year' => '3rd year', 'subject_name' => 'Advanced Medical-Surgical Nursing NUR301', 'tuition_fee' => 750.00, 'professor' => 'Dr. Oliver Copper', 'room' => 'Room 401'],
            ['course' => 'Nursing', 'year' => '3rd year', 'subject_name' => 'Critical Care Nursing NUR302', 'tuition_fee' => 780.00, 'professor' => 'Prof. Patricia Platinum', 'room' => 'Room 402'],
            ['course' => 'Nursing', 'year' => '3rd year', 'subject_name' => 'Nursing Research NUR303', 'tuition_fee' => 770.00, 'professor' => 'Dr. Quentin Iron', 'room' => 'Room 403'],
            ['course' => 'Nursing', 'year' => '3rd year', 'subject_name' => 'Leadership and Management in Nursing NUR304', 'tuition_fee' => 760.00, 'professor' => 'Prof. Rebecca Tin', 'room' => 'Room 404'],
            ['course' => 'Nursing', 'year' => '3rd year', 'subject_name' => 'Evidence-Based Practice NUR305', 'tuition_fee' => 790.00, 'professor' => 'Dr. Samuel Steel', 'room' => 'Room 405'],
            ['course' => 'Nursing', 'year' => '3rd year', 'subject_name' => 'Nursing Informatics NUR306', 'tuition_fee' => 800.00, 'professor' => 'Prof. Teresa Nickel', 'room' => 'Room 406'],
    
            // Nursing - 4th Year
            ['course' => 'Nursing', 'year' => '4th year', 'subject_name' => 'Advanced Community Health Nursing NUR401', 'tuition_fee' => 850.00, 'professor' => 'Dr. Ursula Lead', 'room' => 'Room 501'],
            ['course' => 'Nursing', 'year' => '4th year', 'subject_name' => 'Family Health Nursing NUR402', 'tuition_fee' => 870.00, 'professor' => 'Prof. Victor Zinc', 'room' => 'Room 502'],
            ['course' => 'Nursing', 'year' => '4th year', 'subject_name' => 'Gerontological Nursing NUR403', 'tuition_fee' => 860.00, 'professor' => 'Dr. Wendy Brass', 'room' => 'Room 503'],
            ['course' => 'Nursing', 'year' => '4th year', 'subject_name' => 'Global Health Nursing NUR404', 'tuition_fee' => 880.00, 'professor' => 'Prof. Xavier Iron', 'room' => 'Room 504'],
            ['course' => 'Nursing', 'year' => '4th year', 'subject_name' => 'Transcultural Nursing NUR405', 'tuition_fee' => 890.00, 'professor' => 'Dr. Yvonne Bronze', 'room' => 'Room 505'],
            ['course' => 'Nursing', 'year' => '4th year', 'subject_name' => 'Nursing Capstone Project NUR406', 'tuition_fee' => 1000.00, 'professor' => 'Prof. Zachary Silver', 'room' => 'Room 506'],
    
            // Engineering - 1st Year
            ['course' => 'Engineering', 'year' => '1st year', 'subject_name' => 'Engineering Mathematics I ENG101', 'tuition_fee' => 600.00, 'professor' => 'Dr. Alan Turing', 'room' => 'Room 301'],
            ['course' => 'Engineering', 'year' => '1st year', 'subject_name' => 'Engineering Physics ENG102', 'tuition_fee' => 650.00, 'professor' => 'Prof. Nikola Tesla', 'room' => 'Room 302'],
            ['course' => 'Engineering', 'year' => '1st year', 'subject_name' => 'Engineering Chemistry ENG103', 'tuition_fee' => 620.00, 'professor' => 'Dr. Marie Curie', 'room' => 'Room 303'],
            ['course' => 'Engineering', 'year' => '1st year', 'subject_name' => 'Basic Electrical Engineering ENG104', 'tuition_fee' => 630.00, 'professor' => 'Prof. Thomas Edison', 'room' => 'Room 304'],
            ['course' => 'Engineering', 'year' => '1st year', 'subject_name' => 'Mechanics ENG105', 'tuition_fee' => 640.00, 'professor' => 'Dr. Isaac Newton', 'room' => 'Room 305'],
            ['course' => 'Engineering', 'year' => '1st year', 'subject_name' => 'Engineering Drawing ENG106', 'tuition_fee' => 610.00, 'professor' => 'Prof. Leonardo da Vinci', 'room' => 'Room 306'],
    
            // Engineering - 2nd Year
            ['course' => 'Engineering', 'year' => '2nd year', 'subject_name' => 'Thermodynamics ENG201', 'tuition_fee' => 670.00, 'professor' => 'Dr. James Watt', 'room' => 'Room 401'],
            ['course' => 'Engineering', 'year' => '2nd year', 'subject_name' => 'Fluid Mechanics ENG202', 'tuition_fee' => 680.00, 'professor' => 'Prof. Daniel Bernoulli', 'room' => 'Room 402'],
            ['course' => 'Engineering', 'year' => '2nd year', 'subject_name' => 'Material Science ENG203', 'tuition_fee' => 690.00, 'professor' => 'Dr. Henry Moseley', 'room' => 'Room 403'],
            ['course' => 'Engineering', 'year' => '2nd year', 'subject_name' => 'Manufacturing Processes ENG204', 'tuition_fee' => 700.00, 'professor' => 'Prof. Eli Whitney', 'room' => 'Room 404'],
            ['course' => 'Engineering', 'year' => '2nd year', 'subject_name' => 'Strength of Materials ENG205', 'tuition_fee' => 710.00, 'professor' => 'Dr. Augustin Cauchy', 'room' => 'Room 405'],
            ['course' => 'Engineering', 'year' => '2nd year', 'subject_name' => 'Engineering Mathematics II ENG206', 'tuition_fee' => 720.00, 'professor' => 'Prof. Carl Gauss', 'room' => 'Room 406'],
    
            // Engineering - 3rd Year
            ['course' => 'Engineering', 'year' => '3rd year', 'subject_name' => 'Machine Design ENG301', 'tuition_fee' => 740.00, 'professor' => 'Dr. Rudolf Diesel', 'room' => 'Room 501'],
            ['course' => 'Engineering', 'year' => '3rd year', 'subject_name' => 'Heat Transfer ENG302', 'tuition_fee' => 750.00, 'professor' => 'Prof. Jean Fourier', 'room' => 'Room 502'],
            ['course' => 'Engineering', 'year' => '3rd year', 'subject_name' => 'Control Systems ENG303', 'tuition_fee' => 760.00, 'professor' => 'Dr. Norbert Wiener', 'room' => 'Room 503'],
            ['course' => 'Engineering', 'year' => '3rd year', 'subject_name' => 'Dynamics of Machinery ENG304', 'tuition_fee' => 770.00, 'professor' => 'Prof. James Clerk Maxwell', 'room' => 'Room 504'],
            ['course' => 'Engineering', 'year' => '3rd year', 'subject_name' => 'Power Electronics ENG305', 'tuition_fee' => 780.00, 'professor' => 'Dr. Thomas Edison', 'room' => 'Room 505'],
            ['course' => 'Engineering', 'year' => '3rd year', 'subject_name' => 'Vibration Engineering ENG306', 'tuition_fee' => 790.00, 'professor' => 'Prof. Stephen Timoshenko', 'room' => 'Room 506'],
    
            // Engineering - 4th Year
            ['course' => 'Engineering', 'year' => '4th year', 'subject_name' => 'Advanced Thermodynamics ENG401', 'tuition_fee' => 820.00, 'professor' => 'Dr. Sadi Carnot', 'room' => 'Room 601'],
            ['course' => 'Engineering', 'year' => '4th year', 'subject_name' => 'Robotics ENG402', 'tuition_fee' => 830.00, 'professor' => 'Prof. Isaac Asimov', 'room' => 'Room 602'],
            ['course' => 'Engineering', 'year' => '4th year', 'subject_name' => 'Renewable Energy ENG403', 'tuition_fee' => 840.00, 'professor' => 'Dr. Richard Feynman', 'room' => 'Room 603'],
            ['course' => 'Engineering', 'year' => '4th year', 'subject_name' => 'Finite Element Analysis ENG404', 'tuition_fee' => 850.00, 'professor' => 'Prof. Stephen Timoshenko', 'room' => 'Room 604'],
            ['course' => 'Engineering', 'year' => '4th year', 'subject_name' => 'Advanced Fluid Mechanics ENG405', 'tuition_fee' => 860.00, 'professor' => 'Dr. Albert Einstein', 'room' => 'Room 605'],
            ['course' => 'Engineering', 'year' => '4th year', 'subject_name' => 'Engineering Capstone Project ENG406', 'tuition_fee' => 1000.00, 'professor' => 'Prof. Nikola Tesla', 'room' => 'Room 606'],

            ['course' => 'Architecture', 'year' => '1st year', 'subject_name' => 'Design Studio 1 ARC101', 'tuition_fee' => 500.00, 'professor' => 'Prof. John Doe', 'room' => 'Room 101'],
            ['course' => 'Architecture', 'year' => '1st year', 'subject_name' => 'Architectural Drawing ARC102', 'tuition_fee' => 450.00, 'professor' => 'Prof. Jane Smith', 'room' => 'Room 102'],
            ['course' => 'Architecture', 'year' => '1st year', 'subject_name' => 'History of Architecture 1 ARC103', 'tuition_fee' => 420.00, 'professor' => 'Prof. Alice Johnson', 'room' => 'Room 103'],
            ['course' => 'Architecture', 'year' => '1st year', 'subject_name' => 'Building Technology 1 ARC104', 'tuition_fee' => 470.00, 'professor' => 'Prof. Bob Brown', 'room' => 'Room 104'],

            // Architecture - 2nd Year
            ['course' => 'Architecture', 'year' => '2nd year', 'subject_name' => 'Design Studio 2 ARC201', 'tuition_fee' => 600.00, 'professor' => 'Prof. Emily Black', 'room' => 'Room 201'],
            ['course' => 'Architecture', 'year' => '2nd year', 'subject_name' => 'Architectural Drawing 2 ARC202', 'tuition_fee' => 550.00, 'professor' => 'Prof. Frank White', 'room' => 'Room 202'],
            ['course' => 'Architecture', 'year' => '2nd year', 'subject_name' => 'History of Architecture 2 ARC203', 'tuition_fee' => 520.00, 'professor' => 'Prof. Grace Blue', 'room' => 'Room 203'],
            ['course' => 'Architecture', 'year' => '2nd year', 'subject_name' => 'Building Technology 2 ARC204', 'tuition_fee' => 570.00, 'professor' => 'Prof. Henry Red', 'room' => 'Room 204'],

            // Architecture - 3rd Year
            ['course' => 'Architecture', 'year' => '3rd year', 'subject_name' => 'Design Studio 3 ARC301', 'tuition_fee' => 700.00, 'professor' => 'Prof. Ian Gray', 'room' => 'Room 301'],
            ['course' => 'Architecture', 'year' => '3rd year', 'subject_name' => 'Architectural Drawing 3 ARC302', 'tuition_fee' => 650.00, 'professor' => 'Prof. Jane Yellow', 'room' => 'Room 302'],
            ['course' => 'Architecture', 'year' => '3rd year', 'subject_name' => 'History of Architecture 3 ARC303', 'tuition_fee' => 620.00, 'professor' => 'Prof. Kevin Pink', 'room' => 'Room 303'],
            ['course' => 'Architecture', 'year' => '3rd year', 'subject_name' => 'Building Technology 3 ARC304', 'tuition_fee' => 670.00, 'professor' => 'Prof. Laura Silver', 'room' => 'Room 304'],

            // Architecture - 4th Year
            ['course' => 'Architecture', 'year' => '4th year', 'subject_name' => 'Design Studio 4 ARC401', 'tuition_fee' => 800.00, 'professor' => 'Prof. Michael Gold', 'room' => 'Room 401'],
            ['course' => 'Architecture', 'year' => '4th year', 'subject_name' => 'Architectural Drawing 4 ARC402', 'tuition_fee' => 750.00, 'professor' => 'Prof. Nancy Bronze', 'room' => 'Room 402'],
            ['course' => 'Architecture', 'year' => '4th year', 'subject_name' => 'History of Architecture 4 ARC403', 'tuition_fee' => 720.00, 'professor' => 'Prof. Oliver Copper', 'room' => 'Room 403'],
            ['course' => 'Architecture', 'year' => '4th year', 'subject_name' => 'Building Technology 4 ARC404', 'tuition_fee' => 770.00, 'professor' => 'Prof. Patricia Platinum', 'room' => 'Room 404'],
       

            // Computer Science - 1st Year

            ['course' => 'Computer Science', 'year' => '1st year', 'subject_name' => 'Introduction to Programming CS101', 'tuition_fee' => 500.00, 'professor' => 'Prof. Alan Turing', 'room' => 'Room 101'],
            ['course' => 'Computer Science', 'year' => '1st year', 'subject_name' => 'Discrete Mathematics CS102', 'tuition_fee' => 450.00, 'professor' => 'Prof. Ada Lovelace', 'room' => 'Room 102'],
            ['course' => 'Computer Science', 'year' => '1st year', 'subject_name' => 'Computer Organization CS103', 'tuition_fee' => 420.00, 'professor' => 'Prof. John von Neumann', 'room' => 'Room 103'],
            ['course' => 'Computer Science', 'year' => '1st year', 'subject_name' => 'Data Structures CS104', 'tuition_fee' => 470.00, 'professor' => 'Prof. Donald Knuth', 'room' => 'Room 104'],

            // Computer Science - 2nd Year
            ['course' => 'Computer Science', 'year' => '2nd year', 'subject_name' => 'Algorithms CS201', 'tuition_fee' => 600.00, 'professor' => 'Prof. Edsger Dijkstra', 'room' => 'Room 201'],
            ['course' => 'Computer Science', 'year' => '2nd year', 'subject_name' => 'Operating Systems CS202', 'tuition_fee' => 550.00, 'professor' => 'Prof. Ken Thompson', 'room' => 'Room 202'],
            ['course' => 'Computer Science', 'year' => '2nd year', 'subject_name' => 'Database Systems CS203', 'tuition_fee' => 520.00, 'professor' => 'Prof. Edgar Codd', 'room' => 'Room 203'],
            ['course' => 'Computer Science', 'year' => '2nd year', 'subject_name' => 'Computer Networks CS204', 'tuition_fee' => 570.00, 'professor' => 'Prof. Andrew Tanenbaum', 'room' => 'Room 204'],

            // Computer Science - 3rd Year
            ['course' => 'Computer Science', 'year' => '3rd year', 'subject_name' => 'Software Engineering CS301', 'tuition_fee' => 700.00, 'professor' => 'Prof. Fred Brooks', 'room' => 'Room 301'],
            ['course' => 'Computer Science', 'year' => '3rd year', 'subject_name' => 'Artificial Intelligence CS302', 'tuition_fee' => 650.00, 'professor' => 'Prof. John McCarthy', 'room' => 'Room 302'],
            ['course' => 'Computer Science', 'year' => '3rd year', 'subject_name' => 'Theory of Computation CS303', 'tuition_fee' => 620.00, 'professor' => 'Prof. Alonzo Church', 'room' => 'Room 303'],
            ['course' => 'Computer Science', 'year' => '3rd year', 'subject_name' => 'Human-Computer Interaction CS304', 'tuition_fee' => 670.00, 'professor' => 'Prof. Stuart Card', 'room' => 'Room 304'],

            // Computer Science - 4th Year
            ['course' => 'Computer Science', 'year' => '4th year', 'subject_name' => 'Machine Learning CS401', 'tuition_fee' => 800.00, 'professor' => 'Prof. Geoffrey Hinton', 'room' => 'Room 401'],
            ['course' => 'Computer Science', 'year' => '4th year', 'subject_name' => 'Cyber Security CS402', 'tuition_fee' => 750.00, 'professor' => 'Prof. Bruce Schneier', 'room' => 'Room 402'],
            ['course' => 'Computer Science', 'year' => '4th year', 'subject_name' => 'Parallel Computing CS403', 'tuition_fee' => 720.00, 'professor' => 'Prof. David Patterson', 'room' => 'Room 403'],
            ['course' => 'Computer Science', 'year' => '4th year', 'subject_name' => 'Big Data Analytics CS404', 'tuition_fee' => 770.00, 'professor' => 'Prof. Jeffrey Ullman', 'room' => 'Room 404'],

       
        ]);
    }
}