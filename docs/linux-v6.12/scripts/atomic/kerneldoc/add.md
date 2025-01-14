---
sidebar_position: 1
---
# add

### ファイル情報

- パス: `linux-v6.12/scripts/atomic/kerneldoc/add`

### コンテンツ

```txt
cat <<EOF
/**
 * ${class}${atomicname}() - atomic add with ${desc_order} ordering
 * @i: ${int} value to add
 * @v: pointer to ${atomic}_t
 *
 * Atomically updates @v to (@v + @i) with ${desc_order} ordering.
 *
 * ${desc_noinstr}
 *
 * ${desc_return}
 */
EOF

```
