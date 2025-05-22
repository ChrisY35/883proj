Below is a lightweight requirements specification for the **Manage Your Health (MYH) Web App Prototype**, tailored for implementation in Next.js. It distills the key features and constraints from your group assignment document  into an MVP-focused scope.

---

## 1. Introduction

**Purpose:**
Define what the MYH web app prototype must do to validate core functionality and user flows before full-scale development.

**Audience:**
– Project team (developers, designers)
– Stakeholders (HR, program organizers, IT)

**Assumptions:**
– Will be built in Next.js using React components
– Back-end APIs or mocks will supply data (e.g. program lists, user profiles)
– Basic styling with a component library or Tailwind CSS

---

## 2. Scope

**In-Scope for Prototype (MVP):**

1. **User Authentication** (login/logout)
2. **Program Catalog & Registration** (recreational & wellness)
3. **Wellness Tracking Modules** (diet, water intake, smoking log, mental health)
4. **Simple Incentive Dashboard** (points/badges)
5. **Notifications & Reminders** (in-app + email stub)
6. **Post-Program Feedback Survey**
7. **Admin View** (approve registrations, view basic reports)
8. **Responsive Layout** for desktop & mobile

**Out of Scope for Prototype:**
– HR system integration (stub data only)
– Full analytics & exportable reports
– Two-factor authentication, biometric login
– Gamification beyond simple badge display
– Media uploads (meal photos) with real CV processing

---

## 3. Actors & User Roles

| Role                  | Capabilities                                                                         |
| --------------------- | ------------------------------------------------------------------------------------ |
| **Employee**          | Register for programs, log wellness activities, view earned badges, complete surveys |
| **Program Organizer** | Define new programs (name, type, schedule), view registrations                       |
| **Admin**             | Approve/reject registrations, overview participation metrics                         |

---

## 4. Functional Requirements

### 4.1 Authentication & User Profile

* **FR-1:** Users can log in with corporate credentials (stubbed).
* **FR-2:** Display basic profile (name, department).

### 4.2 Program Catalog & Registration

* **FR-3:** List **Recreational** (e.g., soccer, bowling) and **Wellness** (diet, smoking, mental health, water) programs .
* **FR-4:** Filter by category and time slot.
* **FR-5:** Employees can register/unregister; immediate feedback on success/failure.
* **FR-6:** Admin dashboard to approve or reject pending registrations.

### 4.3 Wellness Tracking Modules

* **FR-7 (Diet):** Simple form to log meals (text entry).
* **FR-8 (Water):** Button to log water intake by glass count.
* **FR-9 (Smoking):** Form to enter daily cigarette count.
* **FR-10 (Mental Health):** List of guided exercises; mark as “completed.”&#x20;

### 4.4 Incentive Dashboard

* **FR-11:** Award points per activity (configurable).
* **FR-12:** Display badges earned and total points.

### 4.5 Notifications & Reminders

* **FR-13:** In-app banner for upcoming sessions.
* **FR-14:** Email stub when registration is approved or session is upcoming (mock email).&#x20;

### 4.6 Feedback Survey

* **FR-15:** Post-program survey with rating scale and comments.
* **FR-16:** Store responses in a simple list view for Admin.

### 4.7 Admin Dashboard

* **FR-17:** View lists of users, programs, registrations, and survey results.
* **FR-18:** Simple charts (e.g., bar chart of registrations per program).

---

## 5. Non-Functional Requirements

| Category            | Requirement                                                   |
| ------------------- | ------------------------------------------------------------- |
| **Usability**       | Responsive design; complete core tasks within 5 clicks        |
| **Performance**     | Page loads under 2 seconds on standard corporate network      |
| **Reliability**     | Mocks fallback if API fails; basic error messages             |
| **Security**        | Next.js built-in XSS/CSRF protections; password fields masked |
| **Accessibility**   | WCAG 2.1 AA compliance for forms and navigation               |
| **Maintainability** | Modular Next.js pages and components; clear folder structure  |

---

## 6. High-Level User Flows

1. **Login → Dashboard**
2. **Browse Programs → Register → Confirmation**
3. **Track Wellness Activity → View Updated Points/Badges**
4. **Complete Survey → Thank-you Screen**
5. **Admin: View Pending Registrations → Approve / Reject**

---

## 7. Technology Stack

* **Frontend:** Next.js (pages / app router), React
* **Styling:** Tailwind CSS or Chakra UI
* **State Management:** React Context or SWR for data fetching
* **Data Layer:** Mock JSON files or a simple Node.js API
* **Charts:** Recharts or Chart.js for admin dashboards

---

## 8. Acceptance Criteria

– All core screens render without JavaScript errors.
– Navigation between main sections (Programs, Tracking, Dashboard) is seamless.
– Creating a registration updates the badge count instantly.
– Admin approvals reflect in the employee’s view within one click.
– Prototype runs locally with `npm run dev` and has basic routing tested.

---

## 9. Next Steps

1. **UI Wireframes** for key screens (Program List, Tracking, Dashboard).
2. **Setup Next.js Boilerplate** with routing skeleton.
3. **Implement Authentication Stub** and Profile page.
4. **Build Program & Registration Flows** with stateful components.
5. **Add Tracking Modules & Incentive Logic.**
6. **Create Admin Views** and simple chart components.
7. **User Testing** to validate basic usability and flows.

---

This MVP-focused requirements doc ensures your Next.js prototype covers the essential MYH features for validating user engagement, program management, and basic analytics. Let me know if you’d like any adjustments or deeper dive into a specific module!
