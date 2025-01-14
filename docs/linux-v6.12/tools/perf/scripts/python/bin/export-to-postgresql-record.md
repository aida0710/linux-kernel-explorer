---
sidebar_position: 5
---
# export-to-postgresql-record

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/python/bin/export-to-postgresql-record`

### コンテンツ

```txt
#!/bin/bash

#
# export perf data to a postgresql database. Can cover
# perf ip samples (excluding the tracepoints). No special
# record requirements, just record what you want to export.
#
perf record $@

```
