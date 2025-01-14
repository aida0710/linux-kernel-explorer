---
sidebar_position: 25
---
# powerpc-hcalls-record

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/python/bin/powerpc-hcalls-record`

### コンテンツ

```txt
#!/bin/bash
perf record -e "{powerpc:hcall_entry,powerpc:hcall_exit}" $@

```
