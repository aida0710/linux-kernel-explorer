---
sidebar_position: 6
---
# can-transceiver.yaml

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/net/can/can-transceiver.yaml`

### コンテンツ

```yaml
# SPDX-License-Identifier: GPL-2.0
%YAML 1.2
---
$id: http://devicetree.org/schemas/net/can/can-transceiver.yaml#
$schema: http://devicetree.org/meta-schemas/core.yaml#

title: CAN transceiver

description: CAN transceiver generic properties bindings

maintainers:
  - Rob Herring <robh@kernel.org>

properties:
  max-bitrate:
    $ref: /schemas/types.yaml#/definitions/uint32
    description: a positive non 0 value that determines the max speed that CAN/CAN-FD can run.
    minimum: 1

additionalProperties: true

```
