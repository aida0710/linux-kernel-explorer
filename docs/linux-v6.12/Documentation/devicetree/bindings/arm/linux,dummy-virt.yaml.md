---
sidebar_position: 51
---
# linux,dummy-virt.yaml

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/arm/linux,dummy-virt.yaml`

### コンテンツ

```yaml
# SPDX-License-Identifier: GPL-2.0-only OR BSD-2-Clause
%YAML 1.2
---
$id: http://devicetree.org/schemas/arm/linux,dummy-virt.yaml#
$schema: http://devicetree.org/meta-schemas/core.yaml#

title: QEMU virt machine

maintainers:
  - Rob Herring <robh@kernel.org>

properties:
  $nodename:
    const: "/"
  compatible:
    const: linux,dummy-virt

additionalProperties: true

...

```
