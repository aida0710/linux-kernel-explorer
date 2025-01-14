---
sidebar_position: 26
---
# powerpc-hcalls-report

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/python/bin/powerpc-hcalls-report`

### コンテンツ

```txt
#!/bin/bash
perf script $@ -s "$PERF_EXEC_PATH"/scripts/python/powerpc-hcalls.py

```
