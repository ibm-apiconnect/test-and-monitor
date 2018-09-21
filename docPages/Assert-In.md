---
layout: document
title: Assert In
description: Assert In
keywords: getting started, install, setup, command line, import, pipeline, update, samples, help
duration: 1 minute
permalink: assert-in
type: document
---

Asserts that the element identified by a given expression matches at least one item from a given list.

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
    <td> Path to the element to be compared with the items in the list; for example `payload.productId`. </td>
  </tr>
  <tr>
    <td> Value </td>
    <td> String </td>
    <td> Yes </td>
    <td> The items that the specified element is to be compared with. Click anywhere in the field, enter the first item, then click the + icon to add further items. Alternatively, you can enter the items as a comma separated list.</td>
  </tr>
  
  {% include assertion_param_type_integer_float.md %}
  
  {% include assertion_param_mode_all_one.md %}
  
  {% include assertion_param_level.md %}  
  
  {% include assertion_param_modifier.md %}
  
  {% include assertion_param_execute_if_item_exists.md %}
   
  {% include assertion_param_stop_test_if_fails.md %}
  
  {% include assertion_param_comment.md %}
  
</table>
