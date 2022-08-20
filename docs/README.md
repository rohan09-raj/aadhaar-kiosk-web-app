//starting will be done by rohan 
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

Applicant will go through a series of fields/forms in kiosk in which they have to fill their personal details , scan their biometrics and necessary documents. After all the details are provided, the applicant will provide an OTP & EID will be generated.
###### Case 2 : Update
In this scenario the applicants will enter their Aadhaar No., then their details will be fetched from the database and the fields will be pre-populated. After that they can select & update their required details through the kiosk.
###### Case 3 : Check Status
In this Scenario the user will enter its genrated **Eid which will** after which he will be able to view its application status that can be in progress, Accepted, Rejected 

# Web App Modules
-Erollment

-Update

-Check Status

-ADMIN- apart from the above 3 components that will be visible to front user we will be also having a admin access module component that will verify the coming enrollment and update requests from the applicants based on which the *Check Status* module will update the status of the application to the end user.

## Each Module Explain in detail Rohan/Venkatesh this should be covering every minute detail as possible

# Integration of the web app in the hardware
## Rasberry Pi
###### Setting up the Raspberry Pi

To get started with your Raspberry Pi computer you'll need the following accessories:

A computer monitor, or television. Most should work as a display for the Raspberry Pi, but for best results, you should use a display with HDMI input. You'll also need an appropriate display cable, to connect  monitor to  Raspberry Pi.

A computer keyboard and mouse

 * Any standard USB keyboard and mouse will work with Raspberry Pi.
 * Wireless keyboards and mice will work if already paired.


A good quality Power Supply
Finally we'll  need an SD card; we recommend a minimum of 8GB micro SD card, and to use the Raspberry Pi Imager to install an operating system onto it. 
###### Connecting a Display
. plug the Raspberry Pi in to a display: either a computer monitor, or a television.
. For monitors with a DVI port, you can use an HDMI-to-DVI cable, or an HDMI cable with a DVI adapter. For older monitors that only support VGA, you can use an HDMI-to-VGA adapter.

Next we will be installing our operating system onto it that will be linux and then will finally install our web app onto it.

## Kernel Setup - Linux
The Raspberry Pi kernel is stored in GitHub and can be viewed at https://github.com/raspberrypi/linux[github.com/raspberrypi/linux];
###### Getting Code In the Kernel

## setting ingerprint and iris module No idea/////////



## Camera Module
###### Connecting the Camera
The flex cable inserts into the connector labelled CAMERA on the Raspberry Pi, which is located between the Ethernet and HDMI ports. The cable must be inserted with the silver contacts facing the HDMI port. To open the connector, pull the tabs on the top of the connector upwards, then towards the Ethernet port. The flex cable should be inserted firmly into the connector, with care taken not to bend the flex at too acute an angle. To close the connector, push the top part of the connector towards the HDMI port and down, while holding the flex cable in place.

