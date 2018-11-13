---
layout: docs
title: Assert Greater
description: Assert Greater
keywords: getting started, install, setup, command line, import, pipeline, update, samples, help
duration: 1 minute
permalink: assert-greater
type: document
order: 2
parent: assertion-components
---

Asserts that the value of the element identified by a given expression is greater than a specific value.

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
    <td> Path to the element to be compared with the specified value; for example, `payload.productId`. </td>
  </tr>
  <tr>
    <td> Value </td>
    <td> String </td>
    <td> Yes </td>
    <td> The value that the element is to be compared with. </td>
  </tr>
  
  {% include assertion_param_type_integer_float.md %}
  
  {% include assertion_param_mode_all_one.md %}
  
  {% include assertion_param_level.md %}  
    
  {% include assertion_param_modifier.md %}
  
  {% include assertion_param_execute_if_item_exists.md %}
   
  {% include assertion_param_stop_test_if_fails.md %}
  
  {% include assertion_param_comment.md %}
  
</table>
