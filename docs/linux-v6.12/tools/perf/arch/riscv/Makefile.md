---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/perf/arch/riscv/Makefile`

### コンテンツ

```txt
ifndef NO_DWARF
PERF_HAVE_DWARF_REGS := 1
endif
PERF_HAVE_ARCH_REGS_QUERY_REGISTER_OFFSET := 1
PERF_HAVE_JITDUMP := 1
HAVE_KVM_STAT_SUPPORT := 1

```
