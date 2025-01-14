---
sidebar_position: 1
---
# Build

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/perl/Perf-Trace-Util/Build`

### コンテンツ

```txt
perf-util-y += Context.o

CFLAGS_Context.o += $(PERL_EMBED_CCOPTS) -Wno-redundant-decls -Wno-strict-prototypes -Wno-bad-function-cast -Wno-declaration-after-statement -Wno-switch-enum
CFLAGS_Context.o += -Wno-unused-parameter -Wno-nested-externs -Wno-undef
CFLAGS_Context.o += -Wno-switch-default -Wno-shadow

ifeq ($(CC_NO_CLANG), 1)
  CFLAGS_Context.o += -Wno-unused-command-line-argument
endif

```
