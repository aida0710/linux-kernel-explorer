---
sidebar_position: 48
---
# intel,keembay.yaml

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/arm/intel,keembay.yaml`

### コンテンツ

```yaml
# SPDX-License-Identifier: (GPL-2.0-only OR BSD-2-Clause)
%YAML 1.2
---
$id: http://devicetree.org/schemas/arm/intel,keembay.yaml#
$schema: http://devicetree.org/meta-schemas/core.yaml#

title: Keem Bay platform

maintainers:
  - Paul J. Murphy <paul.j.murphy@intel.com>
  - Daniele Alessandrelli <daniele.alessandrelli@intel.com>

properties:
  $nodename:
    const: '/'
  compatible:
    items:
      - enum:
          - intel,keembay-evm
      - const: intel,keembay

additionalProperties: true

...

```
