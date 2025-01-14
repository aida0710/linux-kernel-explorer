---
sidebar_position: 20
---
# mem-phys-addr-report

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/python/bin/mem-phys-addr-report`

### コンテンツ

```txt
#!/bin/bash
# description: resolve physical address samples
perf script $@ -s "$PERF_EXEC_PATH"/scripts/python/mem-phys-addr.py

```
