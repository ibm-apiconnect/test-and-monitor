---
layout: document
title: Assert Exists
description: Assert Exists
keywords: getting started, install, setup, command line, import, pipeline, update, samples, help
duration: 1 minute
permalink: assert-exists
type: document
---

Asserts that the value of the element identified by a given expression exists. The presence of the element, even if it is empty, is enough to consider it a valid assertion.

## Parameters

<table>
  <tr>
    <th> Name </th>
    <th> Type </th>
    <th> Required? </th>
    <th> Description </th>
  </tr>
  <tr>
    <td> Expression </td>
    <td> Expression </td>
    <td> Yes </td>
    <td> Path to the element to be checked for existence; for example, `payload.productId`. </td>
  </tr>
  
  {% include assertion_param_mode_all_one.md %}
  
  {% include assertion_param_level.md %}  
  
  {% include assertion_param_modifier.md %}
  
  {% include assertion_param_stop_test_if_fails.md %}
  
  {% include assertion_param_comment.md %}
  
</table>
