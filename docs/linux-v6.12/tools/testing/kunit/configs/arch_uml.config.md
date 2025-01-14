---
sidebar_position: 2
---
# arch_uml.config

### ファイル情報

- パス: `linux-v6.12/tools/testing/kunit/configs/arch_uml.config`

### コンテンツ

```config
# Config options which are added to UML builds by default

# Enable virtio/pci, as a lot of tests require it.
CONFIG_VIRTIO_UML=y
CONFIG_UML_PCI_OVER_VIRTIO=y

# Enable FORTIFY_SOURCE for wider checking.
CONFIG_FORTIFY_SOURCE=y

```
