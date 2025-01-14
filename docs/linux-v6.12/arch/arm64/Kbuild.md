---
sidebar_position: 1
---
# Kbuild

### ファイル情報

- パス: `linux-v6.12/arch/arm64/Kbuild`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-y			+= kernel/ mm/ net/
obj-$(CONFIG_KVM)	+= kvm/
obj-$(CONFIG_XEN)	+= xen/
obj-$(subst m,y,$(CONFIG_HYPERV))	+= hyperv/
obj-$(CONFIG_CRYPTO)	+= crypto/

# for cleaning
subdir- += boot

```
