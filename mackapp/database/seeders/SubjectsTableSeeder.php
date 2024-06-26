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
            ['course' => 'Information Technology', 'year' => '1st year', 'subject_name' => 'Introduction to Information Technology IT101', 'tuition_fee' => 545.00, 'professor' => 'Dr. John Smith', 'room' => 'Room 101 TF 3:00PM-5:00PM'],
            ['course' => 'Information Technology', 'year' => '1st year', 'subject_name' => 'Fundamentals of Programming IT102', 'tuition_fee' => 620.00, 'professor' => 'Prof. Jane Doe', 'room' => 'Room 102 MW 1:00PM-1:00PM'],
            ['course' => 'Information Technology', 'year' => '1st year', 'subject_name' => 'Digital Logic Design IT103', 'tuition_fee' => 550.00, 'professor' => 'Dr. Michael Brown', 'room' => 'Room 103 ThS 1:00PM-1:00PM'],
            ['course' => 'Information Technology', 'year' => '1st year', 'subject_name' => 'Discrete Mathematics ITRoom 104 T 7:00AM-9:00AM', 'tuition_fee' => 525.00, 'professor' => 'Prof. Susan White', 'room' => 'Room Room 104 T 7:00AM-9:00AM'],
            ['course' => 'Information Technology', 'year' => '1st year', 'subject_name' => 'Computer Networks IT105', 'tuition_fee' => 585.00, 'professor' => 'Dr. Robert Black', 'room' => 'Room 105 STh 7:00AM-9:00AM'],
            ['course' => 'Information Technology', 'year' => '1st year', 'subject_name' => 'Database Management Systems IT106', 'tuition_fee' => 600.00, 'professor' => 'Prof. Linda Green', 'room' => 'Room 106 TF 3:00PM-5:00PM'],
            ['course' => 'Information Technology', 'year' => '1st year', 'subject_name' => 'Web Technologies IT107', 'tuition_fee' => 575.00, 'professor' => 'Dr. William Red', 'room' => 'Room 107 STh 7:00AM-9:00AM'],
            ['course' => 'Information Technology', 'year' => '1st year', 'subject_name' => 'Introduction to Data Science IT108', 'tuition_fee' => 653.00, 'professor' => 'Prof. Emily Blue', 'room' => 'Room 108 STh 7:00PM-9:00PM'],
    
            // Information Technology - 2nd Year
            ['course' => 'Information Technology', 'year' => '2nd year', 'subject_name' => 'Object-Oriented Programming IT201', 'tuition_fee' => 554.00, 'professor' => 'Dr. David Yellow', 'room' => 'Room 201 TF 3:00PM-5:00PM'],
            ['course' => 'Information Technology', 'year' => '2nd year', 'subject_name' => 'Data Structures and Algorithms ITRoom 202', 'tuition_fee' => 755.00, 'professor' => 'Prof. Laura Pink', 'room' => 'Room Room 202 STh 7:00AM-9:00AM'],
            ['course' => 'Information Technology', 'year' => '2nd year', 'subject_name' => 'Software Engineering IT203', 'tuition_fee' => 722.00, 'professor' => 'Dr. George Gray', 'room' => 'Room 103 ThS 1:00PM-1:00PM'],
            ['course' => 'Information Technology', 'year' => '2nd year', 'subject_name' => 'Operating Systems ITRoom 204', 'tuition_fee' => 747.00, 'professor' => 'Prof. Nancy Silver', 'room' => 'Room Room 204 STh 7:00PM-9:00PM'],
            ['course' => 'Information Technology', 'year' => '2nd year', 'subject_name' => 'Computer Architecture IT205', 'tuition_fee' => 717.00, 'professor' => 'Dr. Kevin Gold', 'room' => 'Room 205 MT 7:30AM-10:00AM'],
            ['course' => 'Information Technology', 'year' => '2nd year', 'subject_name' => 'Human-Computer Interaction IT206', 'tuition_fee' => 769.00, 'professor' => 'Prof. Megan Bronze', 'room' => 'Room 206 FW 7:30AM-10:00AM'],
    
            // Information Technology - 3rd Year
            ['course' => 'Information Technology', 'year' => '3rd year', 'subject_name' => 'Machine Learning IT301', 'tuition_fee' => 801.00, 'professor' => 'Dr. Daniel Copper', 'room' => 'Room 301 MW 3:00PM-5:00PM MW 3:00PM-5:00PM'],
            ['course' => 'Information Technology', 'year' => '3rd year', 'subject_name' => 'Artificial Intelligence IT302', 'tuition_fee' => 821.00, 'professor' => 'Prof. Olivia Platinum', 'room' => 'Room 302 FW 7:30AM-10:00AM'],
            ['course' => 'Information Technology', 'year' => '3rd year', 'subject_name' => 'Cyber Security IT303', 'tuition_fee' => 991.00, 'professor' => 'Dr. Henry Iron', 'room' => 'Room 303 ThS 1:00PM-1:00PM'],
            ['course' => 'Information Technology', 'year' => '3rd year', 'subject_name' => 'Cloud Computing IT304', 'tuition_fee' => 831.00, 'professor' => 'Prof. Sophia Tin', 'room' => 'Room 304 TTh 7:30AM-10:00AM'],
            ['course' => 'Information Technology', 'year' => '3rd year', 'subject_name' => 'Internet of Things IT305', 'tuition_fee' => 810.00, 'professor' => 'Dr. Thomas Steel', 'room' => 'Room 305 TTh 10:0AM-11:30AM'],
            ['course' => 'Information Technology', 'year' => '3rd year', 'subject_name' => 'Data Analytics IT306', 'tuition_fee' => 851.00, 'professor' => 'Prof. Mia Nickel', 'room' => 'Room 306 FW 10:0AM-11:30AM'],
            ['course' => 'Information Technology', 'year' => '3rd year', 'subject_name' => 'Big Data Technologies IT307', 'tuition_fee' => 860.00, 'professor' => 'Dr. James Lead', 'room' => 'Room 307ThS 1:00PM-1:00PM'],
    
            // Information Technology - 4th Year
            ['course' => 'Information Technology', 'year' => '4th year', 'subject_name' => 'Advanced Database Systems IT401', 'tuition_fee' => 992.00, 'professor' => 'Dr. Jessica Zinc', 'room' => 'Room 401 MS 3:00PM-7:00PM'],
            ['course' => 'Information Technology', 'year' => '4th year', 'subject_name' => 'Blockchain Technology IT402', 'tuition_fee' => 930.00, 'professor' => 'Prof. Andrew Brass', 'room' => 'Room 402 MS 2:00PM-3:00PM'],
            ['course' => 'Information Technology', 'year' => '4th year', 'subject_name' => 'Quantum Computing IT403', 'tuition_fee' => 944.00, 'professor' => 'Dr. Mary Iron', 'room' => 'Room 403 FW 2:00PM-3:00PM'],
            ['course' => 'Information Technology', 'year' => '4th year', 'subject_name' => 'Natural Language Processing IT404', 'tuition_fee' => 950.00, 'professor' => 'Prof. Christopher Bronze', 'room' => 'Room 404 MW 1:00PM-1:00PM'],
            ['course' => 'Information Technology', 'year' => '4th year', 'subject_name' => 'Computer Vision IT405', 'tuition_fee' => 930.00, 'professor' => 'Dr. Patricia Silver', 'room' => 'Room 403 FW 7:30AM-10:00AM'],
            ['course' => 'Information Technology', 'year' => '4th year', 'subject_name' => 'Ethical Hacking IT406', 'tuition_fee' => 960.00, 'professor' => 'Prof. Jennifer Gold', 'room' => 'Room 406 STh 7:00PM-9:00PM'],
            ['course' => 'Information Technology', 'year' => '4th year', 'subject_name' => 'Capstone Project IT407', 'tuition_fee' => 1000.00, 'professor' => 'Dr. Matthew Platinum', 'room' => 'Room 407'],
    
            // Nursing - 1st Year
            ['course' => 'Nursing', 'year' => '1st year', 'subject_name' => 'Anatomy and Physiology NUR101', 'tuition_fee' => 550.00, 'professor' => 'Dr. Alice Johnson', 'room' => 'Room 101 TF 3:00PM-5:00PM'],
            ['course' => 'Nursing', 'year' => '1st year', 'subject_name' => 'Fundamentals of Nursing NUR102', 'tuition_fee' => 610.00, 'professor' => 'Prof. Bob Brown', 'room' => 'Room Room 202 STh 7:00AM-9:00AM'],
            ['course' => 'Nursing', 'year' => '1st year', 'subject_name' => 'Nutrition and Dietetics NUR103', 'tuition_fee' => 510.00, 'professor' => 'Dr. Carol Smith', 'room' => 'Room 103 ThS 1:00PM-1:00PM'],
            ['course' => 'Nursing', 'year' => '1st year', 'subject_name' => 'Biochemistry NURRoom 104', 'tuition_fee' => 910.00, 'professor' => 'Prof. Daniel Green', 'room' => 'Room Room 204 STh 7:00PM-9:00PM'],
            ['course' => 'Nursing', 'year' => '1st year', 'subject_name' => 'Microbiology NUR105', 'tuition_fee' => 990.00, 'professor' => 'Dr. Emily Black', 'room' => 'Room 205 FW 7:30AM-10:00AM'],
            ['course' => 'Nursing', 'year' => '1st year', 'subject_name' => 'Medical-Surgical Nursing NUR106', 'tuition_fee' => 621.00, 'professor' => 'Prof. Frank White', 'room' => 'Room 206 FW 7:30AM-10:00AM'],
            ['course' => 'Nursing', 'year' => '1st year', 'subject_name' => 'Pharmacology NUR107', 'tuition_fee' => 613.00, 'professor' => 'Dr. Grace Blue', 'room' => 'Room 207 FW 7:30AM-10:00AM'],
            ['course' => 'Nursing', 'year' => '1st year', 'subject_name' => 'Health Assessment NUR108', 'tuition_fee' => 620.00, 'professor' => 'Prof. Henry Red', 'room' => 'Room Room 202 MW 7:00AM-9:00AM'],
    
            // Nursing - 2nd Year
            ['course' => 'Nursing', 'year' => '2nd year', 'subject_name' => 'Community Health Nursing NUR201', 'tuition_fee' => 651.00, 'professor' => 'Dr. Ian Gray', 'room' => 'Room 301 MW 3:00PM-5:00PM'],
            ['course' => 'Nursing', 'year' => '2nd year', 'subject_name' => 'Pediatric Nursing NURRoom 202', 'tuition_fee' => 683.00, 'professor' => 'Prof. Jane Yellow', 'room' => 'Room 302 FW 7:30AM-10:00AM'],
            ['course' => 'Nursing', 'year' => '2nd year', 'subject_name' => 'Psychiatric Nursing NUR203', 'tuition_fee' => 671.00, 'professor' => 'Dr. Kevin Pink', 'room' => 'Room 303 ThS 1:00PM-1:00PM'],
            ['course' => 'Nursing', 'year' => '2nd year', 'subject_name' => 'Obstetric Nursing NURRoom 204', 'tuition_fee' => 692.00, 'professor' => 'Prof. Laura Silver', 'room' => 'Room 304 TTh 7:30AM-10:00AM'],
            ['course' => 'Nursing', 'year' => '2nd year', 'subject_name' => 'Pathophysiology NUR205', 'tuition_fee' => 700.00, 'professor' => 'Dr. Michael Gold', 'room' => 'Room 305 TTh 10:0AM-11:30AM'],
            ['course' => 'Nursing', 'year' => '2nd year', 'subject_name' => 'Clinical Skills NUR206', 'tuition_fee' => 712.00, 'professor' => 'Prof. Nancy Bronze', 'room' => 'Room 306 FW 10:0AM-11:30AM'],
    
            // Nursing - 3rd Year
            ['course' => 'Nursing', 'year' => '3rd year', 'subject_name' => 'Advanced Medical-Surgical Nursing NUR301', 'tuition_fee' => 750.00, 'professor' => 'Dr. Oliver Copper', 'room' => 'Room 401 MS 3:00PM-7:00PM'],
            ['course' => 'Nursing', 'year' => '3rd year', 'subject_name' => 'Critical Care Nursing NUR302', 'tuition_fee' => 780.00, 'professor' => 'Prof. Patricia Platinum', 'room' => 'Room 402 MS 2:00PM-3:00PM'],
            ['course' => 'Nursing', 'year' => '3rd year', 'subject_name' => 'Nursing Research NUR303', 'tuition_fee' => 771.00, 'professor' => 'Dr. Quentin Iron', 'room' => 'Room 403 FW 2:00PM-3:00PM'],
            ['course' => 'Nursing', 'year' => '3rd year', 'subject_name' => 'Leadership and Management in Nursing NUR304', 'tuition_fee' => 760.00, 'professor' => 'Prof. Rebecca Tin', 'room' => 'Room 404 MW 1:00PM-1:00PM'],
            ['course' => 'Nursing', 'year' => '3rd year', 'subject_name' => 'Evidence-Based Practice NUR305', 'tuition_fee' => 790.00, 'professor' => 'Dr. Samuel Steel', 'room' => 'Room 403 FW 7:30AM-10:00AM'],
            ['course' => 'Nursing', 'year' => '3rd year', 'subject_name' => 'Nursing Informatics NUR306', 'tuition_fee' => 800.00, 'professor' => 'Prof. Teresa Nickel', 'room' => 'Room 406S Th 7:00PM-9:00PM'],
    
            // Nursing - 4th Year
            ['course' => 'Nursing', 'year' => '4th year', 'subject_name' => 'Advanced Community Health Nursing NUR401', 'tuition_fee' => 850.00, 'professor' => 'Dr. Ursula Lead', 'room' => 'Room Room 202 MW 7:00AM-9:00AM'],
            ['course' => 'Nursing', 'year' => '4th year', 'subject_name' => 'Family Health Nursing NUR402', 'tuition_fee' => 873.00, 'professor' => 'Prof. Victor Zinc', 'room' => 'Room Room 202 WS 7:00AM-9:00AM'],
            ['course' => 'Nursing', 'year' => '4th year', 'subject_name' => 'Gerontological Nursing NUR403', 'tuition_fee' => 860.00, 'professor' => 'Dr. Wendy Brass', 'room' => 'Room Room 503 FT 7:00AM-9:00AM'],
            ['course' => 'Nursing', 'year' => '4th year', 'subject_name' => 'Global Health Nursing NUR404', 'tuition_fee' => 880.00, 'professor' => 'Prof. Xavier Iron', 'room' => 'Room Room 504 S 7:00AM-9:00AM'],
            ['course' => 'Nursing', 'year' => '4th year', 'subject_name' => 'Transcultural Nursing NUR405', 'tuition_fee' => 892.00, 'professor' => 'Dr. Yvonne Bronze', 'room' => 'Room Room 505 M 7:00AM-9:00AM'],
            ['course' => 'Nursing', 'year' => '4th year', 'subject_name' => 'Nursing Capstone Project NUR406', 'tuition_fee' => 1000.00, 'professor' => 'Prof. Zachary Silver', 'room' => 'Room Room 506 T 7:00AM-9:00AM'],
    
            // Engineering - 1st Year
            ['course' => 'Engineering', 'year' => '1st year', 'subject_name' => 'Engineering Mathematics I ENG101', 'tuition_fee' => 600.00, 'professor' => 'Dr. Alan Turing', 'room' => 'Room 301 MW 3:00PM-5:00PM'],
            ['course' => 'Engineering', 'year' => '1st year', 'subject_name' => 'Engineering Physics ENG102', 'tuition_fee' => 651.00, 'professor' => 'Prof. Nikola Tesla', 'room' => 'Room 302 FW 7:30AM-10:00AM'],
            ['course' => 'Engineering', 'year' => '1st year', 'subject_name' => 'Engineering Chemistry ENG103', 'tuition_fee' => 620.00, 'professor' => 'Dr. Marie Curie', 'room' => 'Room 303 ThS 1:00PM-1:00PM'],
            ['course' => 'Engineering', 'year' => '1st year', 'subject_name' => 'Basic Electrical Engineering104', 'tuition_fee' => 634.00, 'professor' => 'Prof. Thomas Edison', 'room' => 'Room 304 TTh 7:30AM-10:00AM'],
            ['course' => 'Engineering', 'year' => '1st year', 'subject_name' => 'Mechanics ENG105', 'tuition_fee' => 640.00, 'professor' => 'Dr. Isaac Newton', 'room' => 'Room 305 TTh 10:0AM-11:30AM'],
            ['course' => 'Engineering', 'year' => '1st year', 'subject_name' => 'Engineering Drawing ENG106', 'tuition_fee' => 610.00, 'professor' => 'Prof. Leonardo da Vinci', 'room' => 'Room 306 FW 10:0AM-11:30AM'],
    
            // Engineering - 2nd Year
            ['course' => 'Engineering', 'year' => '2nd year', 'subject_name' => 'Thermodynamics ENG201', 'tuition_fee' => 670.00, 'professor' => 'Dr. James Watt', 'room' => 'Room 401 MS 3:00PM-7:00PM'],
            ['course' => 'Engineering', 'year' => '2nd year', 'subject_name' => 'Fluid Mechanics ENGRoom 202', 'tuition_fee' => 681.00, 'professor' => 'Prof. Daniel Bernoulli', 'room' => 'Room 402 MS 2:00PM-3:00PM'],
            ['course' => 'Engineering', 'year' => '2nd year', 'subject_name' => 'Material Science ENG203', 'tuition_fee' => 690.00, 'professor' => 'Dr. Henry Moseley', 'room' => 'Room 403 FW 2:00PM-3:00PM'],
            ['course' => 'Engineering', 'year' => '2nd year', 'subject_name' => 'Manufacturing Processes ENGRoom 204', 'tuition_fee' => 700.00, 'professor' => 'Prof. Eli Whitney', 'room' => 'Room 404 MW 1:00PM-1:00PM'],
            ['course' => 'Engineering', 'year' => '2nd year', 'subject_name' => 'Strength of Materials ENG205', 'tuition_fee' => 713.00, 'professor' => 'Dr. Augustin Cauchy', 'room' => 'Room 403 FW 7:30AM-10:00AM'],
            ['course' => 'Engineering', 'year' => '2nd year', 'subject_name' => 'Engineering Mathematics II ENG206', 'tuition_fee' => 720.00, 'professor' => 'Prof. Carl Gauss', 'room' => 'Room 406 S 7:00AM-9:00AM'],
    
            // Engineering - 3rd Year
            ['course' => 'Engineering', 'year' => '3rd year', 'subject_name' => 'Machine Design ENG301', 'tuition_fee' => 740.00, 'professor' => 'Dr. Rudolf Diesel', 'room' => 'Room Room 202 MW 7:00AM-9:00AM'],
            ['course' => 'Engineering', 'year' => '3rd year', 'subject_name' => 'Heat Transfer ENG302', 'tuition_fee' => 752.00, 'professor' => 'Prof. Jean Fourier', 'room' => 'Room Room 202 FT 7:00AM-9:00AM'],
            ['course' => 'Engineering', 'year' => '3rd year', 'subject_name' => 'Control Systems ENG303', 'tuition_fee' => 760.00, 'professor' => 'Dr. Norbert Wiener', 'room' => 'Room Room 503 FT 7:00AM-9:00AM'],
            ['course' => 'Engineering', 'year' => '3rd year', 'subject_name' => 'Dynamics of Machinery ENG304', 'tuition_fee' => 770.00, 'professor' => 'Prof. James Clerk Maxwell', 'room' => 'Room Room 504 S 7:00AM-9:00AM'],
            ['course' => 'Engineering', 'year' => '3rd year', 'subject_name' => 'Power Electronics ENG305', 'tuition_fee' => 781.00, 'professor' => 'Dr. Thomas Edison', 'room' => 'Room Room 505 M 7:00AM-9:00AM'],
            ['course' => 'Engineering', 'year' => '3rd year', 'subject_name' => 'Vibration Engineering ENG306', 'tuition_fee' => 790.00, 'professor' => 'Prof. Stephen Timoshenko', 'room' => 'Room Room 506 T 7:00AM-9:00AM'],
    
            // Engineering - 4th Year
            ['course' => 'Engineering', 'year' => '4th year', 'subject_name' => 'Advanced Thermodynamics ENG401', 'tuition_fee' => 820.00, 'professor' => 'Dr. Sadi Carnot', 'room' => 'Room 601 MW 7:00AM-9:00AM'],
            ['course' => 'Engineering', 'year' => '4th year', 'subject_name' => 'Robotics ENG402', 'tuition_fee' => 830.00, 'professor' => 'Prof. Isaac Asimov', 'room' => 'Room 602 FT 7:00AM-9:00AM'],
            ['course' => 'Engineering', 'year' => '4th year', 'subject_name' => 'Renewable Energy ENG403', 'tuition_fee' => 841.00, 'professor' => 'Dr. Richard Feynman', 'room' => 'Room 603 FT 7:00AM-9:00AM'],
            ['course' => 'Engineering', 'year' => '4th year', 'subject_name' => 'Finite Element Analysis ENG404', 'tuition_fee' => 850.00, 'professor' => 'Prof. Stephen Timoshenko', 'room' => 'Room 604 S 7:00AM-9:00AM'],
            ['course' => 'Engineering', 'year' => '4th year', 'subject_name' => 'Advanced Fluid Mechanics ENG405', 'tuition_fee' => 860.00, 'professor' => 'Dr. Albert Einstein', 'room' => 'Room 605 STh 7:00PM-9:00PM'],
            ['course' => 'Engineering', 'year' => '4th year', 'subject_name' => 'Engineering Capstone Project ENG406', 'tuition_fee' => 1000.00, 'professor' => 'Prof. Nikola Tesla', 'room' => 'Room 606 3:00PM-5:00PM'],

            ['course' => 'Architecture', 'year' => '1st year', 'subject_name' => 'Design Studio 1 ARC101', 'tuition_fee' => 504.00, 'professor' => 'Prof. John Doe', 'room' => 'Room 101 TF 3:00PM-5:00PM'],
            ['course' => 'Architecture', 'year' => '1st year', 'subject_name' => 'Architectural Drawing ARC102', 'tuition_fee' => 450.00, 'professor' => 'Prof. Jane Smith', 'room' => 'Room 102 MW 1:00PM-1:00PM'],
            ['course' => 'Architecture', 'year' => '1st year', 'subject_name' => 'History of Architecture 1 ARC103', 'tuition_fee' => 420.00, 'professor' => 'Prof. Alice Johnson', 'room' => 'Room 103 ThS 1:00PM-1:00PM'],
            ['course' => 'Architecture', 'year' => '1st year', 'subject_name' => 'Building Technology 1 ARCRoom 104', 'tuition_fee' => 470.00, 'professor' => 'Prof. Bob Brown', 'room' => 'Room Room 104 T 7:00AM-9:00AM'],

            // Architecture - 2nd Year
            ['course' => 'Architecture', 'year' => '2nd year', 'subject_name' => 'Design Studio 2 ARC201', 'tuition_fee' => 609.00, 'professor' => 'Prof. Emily Black', 'room' => 'Room 101 TF 3:00PM-5:00PM'],
            ['course' => 'Architecture', 'year' => '2nd year', 'subject_name' => 'Architectural Drawing 2 ARCRoom 202', 'tuition_fee' => 550.00, 'professor' => 'Prof. Frank White', 'room' => 'Room Room 202 STh 7:00AM-9:00AM'],
            ['course' => 'Architecture', 'year' => '2nd year', 'subject_name' => 'History of Architecture 2 ARC203', 'tuition_fee' => 520.00, 'professor' => 'Prof. Grace Blue', 'room' => 'Room 103 ThS 1:00PM-1:00PM'],
            ['course' => 'Architecture', 'year' => '2nd year', 'subject_name' => 'Building Technology 2 ARCRoom 204', 'tuition_fee' => 570.00, 'professor' => 'Prof. Henry Red', 'room' => 'Room Room 204 STh 7:00PM-9:00PM'],

            // Architecture - 3rd Year
            ['course' => 'Architecture', 'year' => '3rd year', 'subject_name' => 'Design Studio 3 ARC301', 'tuition_fee' => 700.00, 'professor' => 'Prof. Ian Gray', 'room' => 'Room 301 MW 3:00PM-5:00PM'],
            ['course' => 'Architecture', 'year' => '3rd year', 'subject_name' => 'Architectural Drawing 3 ARC302', 'tuition_fee' => 651.00, 'professor' => 'Prof. Jane Yellow', 'room' => 'Room 302 FW 7:30AM-10:00AM'],
            ['course' => 'Architecture', 'year' => '3rd year', 'subject_name' => 'History of Architecture 3 ARC303', 'tuition_fee' => 620.00, 'professor' => 'Prof. Kevin Pink', 'room' => 'Room 303 ThS 1:00PM-1:00PM'],
            ['course' => 'Architecture', 'year' => '3rd year', 'subject_name' => 'Building Technology 3 ARC304', 'tuition_fee' => 670.00, 'professor' => 'Prof. Laura Silver', 'room' => 'Room 304 TTh 7:30AM-10:00AM'],

            // Architecture - 4th Year
            ['course' => 'Architecture', 'year' => '4th year', 'subject_name' => 'Design Studio 4 ARC401', 'tuition_fee' => 800.00, 'professor' => 'Prof. Michael Gold', 'room' => 'Room 401 MS 3:00PM-7:00PM'],
            ['course' => 'Architecture', 'year' => '4th year', 'subject_name' => 'Architectural Drawing 4 ARC402', 'tuition_fee' => 750.00, 'professor' => 'Prof. Nancy Bronze', 'room' => 'Room 402 MS 2:00PM-3:00PM'],
            ['course' => 'Architecture', 'year' => '4th year', 'subject_name' => 'History of Architecture 4 ARC403', 'tuition_fee' => 724.00, 'professor' => 'Prof. Oliver Copper', 'room' => 'Room 403 FW 2:00PM-3:00PM'],
            ['course' => 'Architecture', 'year' => '4th year', 'subject_name' => 'Building Technology 4 ARC404', 'tuition_fee' => 770.00, 'professor' => 'Prof. Patricia Platinum', 'room' => 'Room 404 MW 1:00PM-1:00PM'],
       

            // Computer Science - 1st Year

            ['course' => 'Computer Science', 'year' => '1st year', 'subject_name' => 'Introduction to Programming CS101', 'tuition_fee' => 560.00, 'professor' => 'Prof. Alan Turing', 'room' => 'Room 101 TF 3:00PM-5:00PM'],
            ['course' => 'Computer Science', 'year' => '1st year', 'subject_name' => 'Discrete Mathematics CS102', 'tuition_fee' => 450.00, 'professor' => 'Prof. Ada Lovelace', 'room' => 'Room 102 MW 1:00PM-1:00PM'],
            ['course' => 'Computer Science', 'year' => '1st year', 'subject_name' => 'Computer Organization CS103', 'tuition_fee' => 420.00, 'professor' => 'Prof. John von Neumann', 'room' => 'Room 103 ThS 1:00PM-1:00PM'],
            ['course' => 'Computer Science', 'year' => '1st year', 'subject_name' => 'Data Structures CSRoom 104', 'tuition_fee' => 470.00, 'professor' => 'Prof. Donald Knuth', 'room' => 'Room Room 104 T 7:00AM-9:00AM'],

            // Computer Science - 2nd Year
            ['course' => 'Computer Science', 'year' => '2nd year', 'subject_name' => 'Algorithms CS201', 'tuition_fee' => 600.00, 'professor' => 'Prof. Edsger Dijkstra', 'room' => 'Room 101 TF 3:00PM-5:00PM'],
            ['course' => 'Computer Science', 'year' => '2nd year', 'subject_name' => 'Operating Systems CSRoom 202', 'tuition_fee' => 559.00, 'professor' => 'Prof. Ken Thompson', 'room' => 'Room Room 202 STh 7:00AM-9:00AM'],
            ['course' => 'Computer Science', 'year' => '2nd year', 'subject_name' => 'Database Systems CS203', 'tuition_fee' => 520.00, 'professor' => 'Prof. Edgar Codd', 'room' => 'Room 103 ThS 1:00PM-1:00PM'],
            ['course' => 'Computer Science', 'year' => '2nd year', 'subject_name' => 'Computer Networks CSRoom 204', 'tuition_fee' => 570.00, 'professor' => 'Prof. Andrew Tanenbaum', 'room' => 'Room Room 204 STh 7:00PM-9:00PM'],

            // Computer Science - 3rd Year
            ['course' => 'Computer Science', 'year' => '3rd year', 'subject_name' => 'Software Engineering CS301', 'tuition_fee' => 790.00, 'professor' => 'Prof. Fred Brooks', 'room' => 'Room 301 MW 3:00PM-5:00PM'],
            ['course' => 'Computer Science', 'year' => '3rd year', 'subject_name' => 'Artificial Intelligence CS302', 'tuition_fee' => 650.00, 'professor' => 'Prof. John McCarthy', 'room' => 'Room 302 FW 7:30AM-10:00AM'],
            ['course' => 'Computer Science', 'year' => '3rd year', 'subject_name' => 'Theory of Computation CS303', 'tuition_fee' => 620.00, 'professor' => 'Prof. Alonzo Church', 'room' => 'Room 303 ThS 1:00PM-1:00PM'],
            ['course' => 'Computer Science', 'year' => '3rd year', 'subject_name' => 'Human-Computer Interaction CS304', 'tuition_fee' => 670.00, 'professor' => 'Prof. Stuart Card', 'room' => 'Room 304 TTh 7:30AM-10:00AM'],

            // Computer Science - 4th Year
            ['course' => 'Computer Science', 'year' => '4th year', 'subject_name' => 'Machine Learning CS401', 'tuition_fee' => 850.00, 'professor' => 'Prof. Geoffrey Hinton', 'room' => 'Room 401 MS 3:00PM-7:00PM'],
            ['course' => 'Computer Science', 'year' => '4th year', 'subject_name' => 'Cyber Security CS402', 'tuition_fee' => 750.00, 'professor' => 'Prof. Bruce Schneier', 'room' => 'Room 402 MS 2:00PM-3:00PM'],
            ['course' => 'Computer Science', 'year' => '4th year', 'subject_name' => 'Parallel Computing CS403', 'tuition_fee' => 720.00, 'professor' => 'Prof. David Patterson', 'room' => 'Room 403 FW 2:00PM-3:00PM'],
            ['course' => 'Computer Science', 'year' => '4th year', 'subject_name' => 'Big Data Analytics CS404', 'tuition_fee' => 790.00, 'professor' => 'Prof. Jeffrey Ullman', 'room' => 'Room 404 MW 1:00PM-1:00PM'],

       
        ]);
    }
}