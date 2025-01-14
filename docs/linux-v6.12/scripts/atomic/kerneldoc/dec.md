---
sidebar_position: 7
---
# dec

### ファイル情報

- パス: `linux-v6.12/scripts/atomic/kerneldoc/dec`

### コンテンツ

```txt
cat <<EOF
/**
 * ${class}${atomicname}() - atomic decrement with ${desc_order} ordering
 * @v: pointer to ${atomic}_t
 *
 * Atomically updates @v to (@v - 1) with ${desc_order} ordering.
 *
 * ${desc_noinstr}
 *
 * ${desc_return}
 */
EOF

```
