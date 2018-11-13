---
layout: docs
title: Assert Is
description: Assert Is
keywords: getting started, install, setup, command line, import, pipeline, update, samples, help
duration: 1 minute
permalink: assert-is
type: document
order: 2
parent: assertion-components
---

Asserts that the value of the element identified by a given expression is of a specific type.

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
    <td> Path to the element whose type is to be examined; for example, `payload.productId`. </td>
  </tr>
  <tr>
    <td> Type </td>
    <td> Selection list </td>
    <td> Yes </td>
    <td> Select one of the following values:
      <ul>
       <li><code>integer</code>: Checks if the element is an integer value.</li>
       <li><code>float</code>: Checks if the element is a decimal value.</li>
       <li><code>url</code>: Checks if the element is a well-formatted URL.</li>
       <li><code>boolean</code>: Checks if the element is a boolean value.</li>
       <li><code>phone</code>: Checks if the element is a valid phone number format.</li>
       <li><code>email</code>: checks if the element is a valid email format.</li>
       <li><code>map</code>: Checks if the element is a map type.</li>
       <li><code>array</code>: Checks if the element is an array.</li>
      </ul>
    </td>  
  </tr>
  
  {% include assertion_param_mode_all_one.md %}
  
  {% include assertion_param_level.md %}
  
  {% include assertion_param_modifier.md %} 
  
  {% include assertion_param_execute_if_item_exists.md %}
   
  {% include assertion_param_stop_test_if_fails.md %}
  
  {% include assertion_param_comment.md %}
  
</table>
