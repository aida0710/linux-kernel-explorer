---
sidebar_position: 1
---
# Kbuild

### ファイル情報

- パス: `linux-v6.12/arch/loongarch/Kbuild`

### コンテンツ

```txt
obj-y += kernel/
obj-y += mm/
obj-y += net/
obj-y += vdso/

obj-$(CONFIG_KVM) += kvm/
obj-$(CONFIG_BUILTIN_DTB) += boot/dts/

# for cleaning
subdir- += boot

```
