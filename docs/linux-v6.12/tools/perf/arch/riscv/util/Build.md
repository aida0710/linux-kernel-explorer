---
sidebar_position: 1
---
# Build

### ファイル情報

- パス: `linux-v6.12/tools/perf/arch/riscv/util/Build`

### コンテンツ

```txt
perf-util-y += perf_regs.o
perf-util-y += header.o

perf-util-$(CONFIG_LIBTRACEEVENT) += kvm-stat.o
perf-util-$(CONFIG_DWARF) += dwarf-regs.o
perf-util-$(CONFIG_LIBDW_DWARF_UNWIND) += unwind-libdw.o

```
