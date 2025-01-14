---
sidebar_position: 1
---
# Build

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/Build`

### コンテンツ

```txt
ifeq ($(CONFIG_LIBTRACEEVENT),y)
  perf-util-$(CONFIG_LIBPERL)   += perl/Perf-Trace-Util/
endif
perf-util-$(CONFIG_LIBPYTHON) += python/Perf-Trace-Util/

```
