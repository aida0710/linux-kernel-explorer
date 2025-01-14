---
sidebar_position: 1
---
# Build

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/python/Perf-Trace-Util/Build`

### コンテンツ

```txt
perf-util-y += Context.o

# -Wno-declaration-after-statement: The python headers have mixed code with declarations (decls after asserts, for instance)
CFLAGS_Context.o += $(PYTHON_EMBED_CCOPTS) -Wno-redundant-decls -Wno-strict-prototypes -Wno-unused-parameter -Wno-nested-externs -Wno-declaration-after-statement

```
