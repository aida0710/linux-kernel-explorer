---
sidebar_position: 2
---
# Build

### ファイル情報

- パス: `linux-v6.12/tools/perf/arch/arm/util/Build`

### コンテンツ

```txt
perf-util-y += perf_regs.o

perf-util-$(CONFIG_DWARF) += dwarf-regs.o

perf-util-$(CONFIG_LOCAL_LIBUNWIND)    += unwind-libunwind.o
perf-util-$(CONFIG_LIBDW_DWARF_UNWIND) += unwind-libdw.o

perf-util-$(CONFIG_AUXTRACE) += pmu.o auxtrace.o cs-etm.o

```
