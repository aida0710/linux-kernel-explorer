---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/platform/x86/intel/ifs/Makefile`

### コンテンツ

```txt
obj-$(CONFIG_INTEL_IFS)		+= intel_ifs.o

intel_ifs-objs			:= core.o load.o runtest.o sysfs.o

```
