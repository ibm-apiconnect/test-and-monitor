---
layout: docs
title: Scheduling a test
description: Schedule Test
keywords: getting started, install, setup, command line, import, pipeline, update, samples, help
duration: 1 minute
permalink: schedule-test
type: document
order: 5
parent: gettingstarted
---

# Scheduling a test

**Note:** You must publish a test before you can schedule it; see [Publishing a test](Publish-test.md).  
  
To schedule a test, complete the following steps:

1. Click your project name in the menu bar to get to the "Projects" page.

    ![Image of projects link](./dist/images/projects-link.png)

1. On the "Projects" page, click the **Tests** icon ![Image of the tests icon](./dist/images/icon-tests.png) for the project that contains the test that you want to schedule. The list of tests is displayed.

1. On the "Tests" page, click the **Scheduler** icon ![Image of the scheduler icon](./dist/images/icon-scheduler.png) for the test that you want to schedule runs for.

    ![Image of tests schedule button](./dist/images/tests-schedule-button.png)

1. On the "Scheduler" page, click **+ Create New Run**.

    ![Image of schedules create button](./dist/images/schedules-create-button.png)

1. On the "New Run" page, complete the following details:
- Enter a **Name** for the run.
- Select a **Downloader** from the drop-down menu.
- Set the frequency of the run that you require.
- Click **Save Run** in the upper right of the page.

    ![Image of schedule details](./dist/images/schedule-details.png)

In the above example, the test is set to run at 00:00, 00:15, 00:30, 00:45, 06:00, 06:15, 06:30, 06:45, 12:00, 12:15, 12:30, 12:45, 18:00, 18:15, 18:30, and 18:45 every day of every month.

Note that free accounts cannot schedule runs more frequently than every 30 minutes. For this reason they can only set minutes to 15 and 45.

# Results

Your test run is now displayed in the "Schedules List". You can edit, pause, or delete a test run, by hovering over the test that you want to update, and clicking on the appropriate icon.

# What to do next

By following our getting started guide, you successfully created, published and scheduled a test. You can now continue to use the application, or you can review the following additional information:

- [Assertion Components](./assertion-components)
- [Deleting a project](./delete-project)
- [Deleting a test](./delete-test)
- [Opening a test in the Composer](./open-test-in-composer)

- Previous topic: [Publishing a test](Publish-test.md)
