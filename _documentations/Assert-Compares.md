---
layout: docs
title: Assert Compares
description: Assert Compares
keywords: getting started, install, setup, command line, import, pipeline, update, samples, help
duration: 1 minute
permalink: assert-compares
type: document
order: 2
parent: assertion-components
---

# Assert Compares

Asserts that two elements are equivalent in some way.

# Parameters

| Name  | Type | Required? | Description | Default value |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Expression 1 | Expression | Yes | Path to the first element for comparison; for example, `payload1.productId`. |  |
| Expression 2 | Expression | Yes | Path to the second element for comparison; for example, `payload2.productId`. |  |
| Mode | Selection list | Yes | Select one of the following values: **text** - compare the text of the two elements as plain text, **values** - compare the two elements regardless of their text layout, **structure** - compare only the structure of the two elements. | text |
{{ site.data.assertion_param_level }}
  
<!--
   {% include assertion_param_level.md %}
  
  {% include assertion_param_stop_test_if_fails.md %}
  
  {% include assertion_param_comment.md %} 

-->
