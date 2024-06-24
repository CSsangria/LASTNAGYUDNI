<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E print nani? E print nani. Mao nani? Mao nani.</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet">
    <style>
        @page {
            size: A4;
            margin: 1cm;
        }

        body {
            font-family: 'Arial', sans-serif;
        }

        .page-break {
            page-break-before: always;
        }

        .table-container {
            margin-bottom: 20px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }

        th,
        td {
            border: 1px solid #e2e8f0;
            padding: 8px;
            text-align: left;
        }

        th {
            background-color: #f1f5f9;
            color: #4a5568;
            font-weight: bold;
        }

        .info-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
            font-size: 14px;
        }

        .info-header {
            text-align: right;
            padding-right: 10px;
            font-weight: bold;
            width: 25%;
            color: #4a5568;
        }

        .info-value {
            width: 25%;
            padding-left: 10px;
        }

        .header-row {
            background-color: #cbd5e0;
            font-weight: bold;
        }

        .text-lg {
            font-size: 1.125rem; /* 18px */
            line-height: 1.75rem; /* 28px */
        }

        .text-gray-600 {
            color: #718096;
        }

        .font-bold {
            font-weight: bold;
        }

        .text-center {
            text-align: center;
        }

        .text-right {
            text-align: right;
        }

        .text-left {
            text-align: left;
        }

        .mb-4 {
            margin-bottom: 1rem; /* 16px */
        }

        .mb-8 {
            margin-bottom: 2rem; /* 32px */
        }

        .p-4 {
            padding: 1rem; /* 16px */
        }

        .border-gray-300 {
            border-color: #e2e8f0;
        }

        .bg-gray-100 {
            background-color: #f7fafc;
        }
    </style>
</head>

<body class="p-4">

    <h1 class="text-lg font-bold mb-4">{{ $title }}</h1>
    <p class="text-gray-600 mb-8">{{ $date }}</p>

    @foreach($enrollments as $enrollment)
    <div class="table-container">
        <table class="info-table mb-4">
            <tr>
                <th class="info-header">Student No:</th>
                <td class="info-value">{{ $enrollment->id }}</td>
                <th class="info-header">Department:</th>
                <td class="info-value">{{ $enrollment->department }}</td>
                <th class="info-header">Course:</th>
                <td class="info-value">{{ $enrollment->course }}</td>
            </tr>
            <tr>
                <th class="info-header">Term:</th>
                <td class="info-value">{{ $enrollment->term }}</td>
                <th class="info-header">Application Type:</th>
                <td class="info-value">{{ $enrollment->application_type  }}</td>
                <th class="info-header">Year Level:</th>
                <td class="info-value">{{ $enrollment->year }}</td>
            </tr>
            <tr>
                <th class="info-header">Name:</th>
                <td class="info-value">{{ $enrollment->first_name }} {{ $enrollment->last_name }}</td>
                <th class="info-header">Date of Birth:</th>
                <td class="info-value">{{ $enrollment->date_of_birth }}</td>
                <th class="info-header">Gender:</th>
                <td class="info-value">{{ $enrollment->gender }}</td>
            </tr>
            <tr>
                <th class="info-header">Nationality:</th>
                <td class="info-value">{{ $enrollment->nationality }}</td>
                <th class="info-header">Civil Status:</th>
                <td class="info-value">{{ $enrollment->civil_status }}</td>
                <th class="info-header">Contact #:</th>
                <td class="info-value">{{ $enrollment->mobile_number }}</td>
            </tr>
            <tr>
                <th class="info-header">Address:</th>
                <td class="info-value" colspan="5">{{ $enrollment->address }}</td>
            </tr>
            <tr>
                <th class="info-header">Province:</th>
                <td class="info-value">{{ $enrollment->province }}</td>
                <th class="info-header">Region:</th>
                <td class="info-value">{{ $enrollment->region }}</td>
                <th class="info-header">Barangay:</th>
                <td class="info-value">{{ $enrollment->barangay }}</td>
            </tr>
            <tr>
                <th class="info-header">Religion:</th>
                <td class="info-value">{{ $enrollment->religion }}</td>
                <th class="info-header">Enrollment Status:</th>
                <td class="info-value">{{ $enrollment->status }}</td>
                <th class="info-header">Section:</th>
                <td class="info-value">{{ $enrollment->section }}</td>
            </tr>
        </table>
    </div>
    @endforeach

    <div class="table-container">
        <table class="min-w-full bg-gray-100 border-collapse border border-gray-300 mb-8">
            <thead>
                <tr class="header-row">
                    <th class="p-4 text-lg font-bold text-center">Total Tuition Fee</th>
                </tr>
            </thead>
            <tbody>
                @foreach($tuitions as $tuition)
                <tr>
                    <td class="p-4 text-center">{{ $tuition->tuition_fee }}</td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>

</body>

</html>
