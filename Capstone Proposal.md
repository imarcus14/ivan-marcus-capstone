# How to have it work as another developer

-To have it work please populate your env based on the data inside the env sample, and use that.
-Please have a photo of a dog ready to upload using the app as it will be the image for your profile

# Project Title

WOOFMEET

## Overview

it is an app to allow you to meet other individuals who have dogs who are not well socialized. Having a dog like this myself having him more socialized with other dogs and with certain surroundings would allow him to be a less anxious and more normal dog.

### Problem Space

The app is needed because there are countless dogs who suffer from anxiety towards everything because they weren't well integrated. Whether it be to loud noises or to other dogs, having they be able to meet nad interact with others in different surroundings and other areas allow them to be more comfortable in every situation.

### User Profile

The people who will use this app are ones that have dogs who have social anxiety and never got proper socialization either as a puppy or need to be socialized because they are a puppy.

### Features

-AS a user I want to be able to find people near me to have dog playdates
-As a user I want to be able to filter by personality types, breed, age, and size
-As a user I want to see past experiences people have had with the dog and owner
-I want to be able to create a profile and be able to update it with images of my dog

## Implementation

### Tech Stack

- React
- JS
- MySQL
- Express
- Client libraries:
  - react
  - react-router
  - axios
  - socket io
  - Motion
- Server libraries:
  - knex
  - express

### APIs

- No external API will be used

### Sitemap

-Welcome Page
-Home Page
-Chat
-Login/Signup
-People connected with

### Mockups

-Please check the image folder

### Data

There will be 2 different tables, one for dogs and one for users.
They will have a 1-many relationship as one user can have multiple dogs

The dpgs table will contain the id, name, age, breed, and personality type

User table will have id, name

### Endpoints

**Get /dogs**

- Get the dogs, with their age, personality type, breed, and photo of them with their owner

Maybe **Get /dogs/:id**
-Get the individual dog information exactly as it is before

**Post /dogs**
-Take information from the sign up page and store it as the profile

## Roadmap

- Create client
  - React project with routes and boiler plate
- Create Server
- Get placeholder information to at least fill 4 cards
- Create seeds with sample data
- Feature: Cards with dogs
- Feature: Change profile pic
- Feature: Rate people

-Bug fixes

---

## Future Implementations

-Proper profile validation and addition with encryption
-Forgot password functionality
-Proper ratings for each user
