---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/mm/damon/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

obj-y				:= core.o
obj-$(CONFIG_DAMON_VADDR)	+= ops-common.o vaddr.o
obj-$(CONFIG_DAMON_PADDR)	+= ops-common.o paddr.o
obj-$(CONFIG_DAMON_SYSFS)	+= sysfs-common.o sysfs-schemes.o sysfs.o
obj-$(CONFIG_DAMON_DBGFS)	+= dbgfs.o
obj-$(CONFIG_DAMON_RECLAIM)	+= modules-common.o reclaim.o
obj-$(CONFIG_DAMON_LRU_SORT)	+= modules-common.o lru_sort.o

```
