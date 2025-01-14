---
sidebar_position: 12
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/s390/hypfs/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the linux hypfs filesystem routines.
#

obj-$(CONFIG_S390_HYPFS)	+= hypfs_dbfs.o
obj-$(CONFIG_S390_HYPFS)	+= hypfs_diag.o
obj-$(CONFIG_S390_HYPFS)	+= hypfs_diag0c.o
obj-$(CONFIG_S390_HYPFS)	+= hypfs_sprp.o
obj-$(CONFIG_S390_HYPFS)	+= hypfs_vm.o

obj-$(CONFIG_S390_HYPFS_FS)	+= hypfs_diag_fs.o
obj-$(CONFIG_S390_HYPFS_FS)	+= hypfs_vm_fs.o
obj-$(CONFIG_S390_HYPFS_FS)	+= inode.o

```
