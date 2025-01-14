---
sidebar_position: 1
---
# Kbuild

### ファイル情報

- パス: `linux-v6.12/arch/riscv/Kbuild`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

obj-y += kernel/ mm/ net/
obj-$(CONFIG_BUILTIN_DTB) += boot/dts/
obj-$(CONFIG_CRYPTO) += crypto/
obj-y += errata/
obj-$(CONFIG_KVM) += kvm/

obj-$(CONFIG_ARCH_SUPPORTS_KEXEC_PURGATORY) += purgatory/

# for cleaning
subdir- += boot

```
