---
sidebar_position: 7
---
# export-to-sqlite-record

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/python/bin/export-to-sqlite-record`

### コンテンツ

```txt
#!/bin/bash

#
# export perf data to a sqlite3 database. Can cover
# perf ip samples (excluding the tracepoints). No special
# record requirements, just record what you want to export.
#
perf record $@

```
