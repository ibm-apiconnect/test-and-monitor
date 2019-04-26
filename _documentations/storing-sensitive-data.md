---
layout: docs
title: Storing Sensitive Data
description: Storing Sensitive Data
keywords: security, personal information, PI
duration: 1 minute
permalink: storing-sensitive-data
type: document
order: 2
parent: security
---

When using IBM API Connect Test and Monitor, it is always helpful to remember:

- Before making a request to any endpoint, it is important to pause and think about the data supplied in the request and the data expected in the response. If the data contains sensitive data such as authentication credentials or any form of personal data, then we **strongly** discourage you from making that request.
- IBM API Connect Test and Monitor is a cloud based offering and hence any sensitive data that you choose to save will end up in a persistent store.
- Try to always use test accounts when monitoring production services.
