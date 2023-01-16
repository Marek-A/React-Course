import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export default function AdminHome() {

  const { t } = useTranslation();

  return (
    <div>



      <Link to="/admin/add-product">
        <Button variant="danger">{t("Add product")}</Button>
      </Link>

      <Link to="/admin/maintain-product">
        <Button variant="primary">{t("Maintain products")}</Button>
      </Link>

      <Link to="/admin/maintain-category">
        <Button variant="primary">{t("Maintain categories")}</Button>
      </Link>


    </div>
  )
}
