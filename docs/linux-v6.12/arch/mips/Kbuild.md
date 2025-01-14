---
sidebar_position: 1
---
# Kbuild

### ファイル情報

- パス: `linux-v6.12/arch/mips/Kbuild`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

# platform specific definitions
include $(srctree)/arch/mips/Kbuild.platforms
obj-y := $(platform-y)

# make clean traverses $(obj-) without having included .config, so
# everything ends up here
obj- := $(platform-y)

# mips object files
# The object files are linked as core-y files would be linked

obj-y += generic/
obj-y += kernel/
obj-y += mm/
obj-y += net/
obj-y += vdso/

ifdef CONFIG_KVM
obj-y += kvm/
endif

# for cleaning
subdir- += boot

```
