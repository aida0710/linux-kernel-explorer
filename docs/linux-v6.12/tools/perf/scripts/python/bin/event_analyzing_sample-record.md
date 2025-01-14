---
sidebar_position: 3
---
# event_analyzing_sample-record

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/python/bin/event_analyzing_sample-record`

### コンテンツ

```txt
#!/bin/bash

#
# event_analyzing_sample.py can cover all type of perf samples including
# the tracepoints, so no special record requirements, just record what
# you want to analyze.
#
perf record $@

```
