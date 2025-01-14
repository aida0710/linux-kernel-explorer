---
sidebar_position: 2
---
# Build

### ファイル情報

- パス: `linux-v6.12/tools/perf/arch/powerpc/tests/Build`

### コンテンツ

```txt
perf-test-$(CONFIG_DWARF_UNWIND) += regs_load.o
perf-test-$(CONFIG_DWARF_UNWIND) += dwarf-unwind.o

perf-test-y += arch-tests.o

```
