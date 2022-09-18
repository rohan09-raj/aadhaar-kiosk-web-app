# Tech Stack for the Web App
ReactJS– Frontend of Web App
Node.js – Backend of Web App
MongoDB – Database management system
Windows/Linux – Operating System

# Hardware Dependencies/Components for implementing the Kiosk
- Touch screen Display
- Camera - For capturing Photographs
- SD Card - Storage for the Kiosk.
- Raspberry Pi 4 - Main control board of Kiosk.
- Document Scanner -To scan user documents.
- Fingerprint & Iris Scanner- For biometric verification
- Kiosk Container - To integrate and setup the entire kiosk components.


# Workflow And Use Cases of our Web app

###### Case 1 : Enrollment

Applicant will go through a series of fields/forms in kiosk in which they have to fill their personal details, scan their bio-metrics and necessary documents. After all the details are provided, the applicant will be provided an OTP & EID will be generated.

###### Case 2 : Update
In this scenario the applicants will enter their Aadhaar No., then their details will be fetched from the database and the fields will be pre-populated. After that they can select & update their required details through the kiosk.
###### Case 3 : Check Status
In this Scenario the user will enter its genrated **Eid which will** after which he will be able to view its application status that can be in progress, Accepted, Rejected 

# Web App Modules
-Erollment

-Update

-Check Status

-ADMIN- apart from the above 3 components that will be visible to front user we will be also having a admin access module component that will verify the coming enrollment and update requests from the applicants based on which the *Check Status* module will update the status of the application to the end user.
