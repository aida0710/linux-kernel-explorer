---
sidebar_position: 9
---
# snapcraft.template

### ファイル情報

- パス: `linux-v6.12/scripts/package/snapcraft.template`

### コンテンツ

```template
name: kernel
version: KERNELRELEASE
summary: Linux kernel
description: The upstream Linux kernel
grade: stable
confinement: strict
type: kernel

parts:
  kernel:
    plugin: kernel
    source: SRCTREE
    source-type: local
    kernel-with-firmware: false

```
