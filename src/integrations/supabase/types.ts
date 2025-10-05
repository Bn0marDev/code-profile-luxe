export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      activities: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          slug: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          slug: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          slug?: string
        }
        Relationships: []
      }
      admins: {
        Row: {
          created_at: string
          email: string | null
          id: string
          is_active: boolean | null
          name: string | null
          password_hash: string | null
          role: string | null
          updated_at: string | null
          user_id: string | null
          username: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: string
          is_active?: boolean | null
          name?: string | null
          password_hash?: string | null
          role?: string | null
          updated_at?: string | null
          user_id?: string | null
          username?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          is_active?: boolean | null
          name?: string | null
          password_hash?: string | null
          role?: string | null
          updated_at?: string | null
          user_id?: string | null
          username?: string | null
        }
        Relationships: []
      }
      blog_categories: {
        Row: {
          created_at: string | null
          description: string | null
          display_order: number | null
          id: string
          is_active: boolean | null
          name: string
          slug: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          display_order?: number | null
          id?: string
          is_active?: boolean | null
          name: string
          slug: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          display_order?: number | null
          id?: string
          is_active?: boolean | null
          name?: string
          slug?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          category_id: string | null
          content: string
          created_at: string | null
          excerpt: string | null
          id: string
          is_featured: boolean | null
          is_published: boolean | null
          links: Json | null
          published_at: string | null
          slug: string
          title: string
          updated_at: string | null
          view_count: number | null
        }
        Insert: {
          category_id?: string | null
          content: string
          created_at?: string | null
          excerpt?: string | null
          id?: string
          is_featured?: boolean | null
          is_published?: boolean | null
          links?: Json | null
          published_at?: string | null
          slug: string
          title: string
          updated_at?: string | null
          view_count?: number | null
        }
        Update: {
          category_id?: string | null
          content?: string
          created_at?: string | null
          excerpt?: string | null
          id?: string
          is_featured?: boolean | null
          is_published?: boolean | null
          links?: Json | null
          published_at?: string | null
          slug?: string
          title?: string
          updated_at?: string | null
          view_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "blog_posts_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "blog_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          activity_id: string
          id: string
          name: string
        }
        Insert: {
          activity_id: string
          id?: string
          name: string
        }
        Update: {
          activity_id?: string
          id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "categories_activity_id_fkey"
            columns: ["activity_id"]
            isOneToOne: false
            referencedRelation: "activities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "categories_activity_id_fkey"
            columns: ["activity_id"]
            isOneToOne: false
            referencedRelation: "pharmacy_products_v"
            referencedColumns: ["activity_id"]
          },
        ]
      }
      contributors: {
        Row: {
          badge: string
          completed_reports: number
          created_at: string
          id: string
          join_date: string
          name: string
          phone: string
          success_rate: number | null
          total_reports: number
          updated_at: string
        }
        Insert: {
          badge?: string
          completed_reports?: number
          created_at?: string
          id?: string
          join_date?: string
          name: string
          phone: string
          success_rate?: number | null
          total_reports?: number
          updated_at?: string
        }
        Update: {
          badge?: string
          completed_reports?: number
          created_at?: string
          id?: string
          join_date?: string
          name?: string
          phone?: string
          success_rate?: number | null
          total_reports?: number
          updated_at?: string
        }
        Relationships: []
      }
      notifications: {
        Row: {
          created_at: string | null
          expires_at: string
          id: string
          message: string
          title: string
          type: string
        }
        Insert: {
          created_at?: string | null
          expires_at: string
          id?: string
          message: string
          title: string
          type?: string
        }
        Update: {
          created_at?: string | null
          expires_at?: string
          id?: string
          message?: string
          title?: string
          type?: string
        }
        Relationships: []
      }
      product_categories: {
        Row: {
          category_id: string
          product_id: string
        }
        Insert: {
          category_id: string
          product_id: string
        }
        Update: {
          category_id?: string
          product_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "product_categories_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_categories_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "pharmacy_products_v"
            referencedColumns: ["product_id"]
          },
          {
            foreignKeyName: "product_categories_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          activity_id: string
          created_at: string
          description: string | null
          id: string
          name: string
          price: number
          sku: string
          stock: number
          unit: string
        }
        Insert: {
          activity_id: string
          created_at?: string
          description?: string | null
          id?: string
          name: string
          price: number
          sku: string
          stock?: number
          unit?: string
        }
        Update: {
          activity_id?: string
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          price?: number
          sku?: string
          stock?: number
          unit?: string
        }
        Relationships: [
          {
            foreignKeyName: "products_activity_id_fkey"
            columns: ["activity_id"]
            isOneToOne: false
            referencedRelation: "activities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_activity_id_fkey"
            columns: ["activity_id"]
            isOneToOne: false
            referencedRelation: "pharmacy_products_v"
            referencedColumns: ["activity_id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string | null
          email: string
          id: string
          updated_at: string | null
          username: string
        }
        Insert: {
          created_at?: string | null
          email: string
          id: string
          updated_at?: string | null
          username: string
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          updated_at?: string | null
          username?: string
        }
        Relationships: []
      }
      project_likes: {
        Row: {
          created_at: string
          device_id: string
          id: string
          ip_address: string | null
          project_id: string
        }
        Insert: {
          created_at?: string
          device_id: string
          id?: string
          ip_address?: string | null
          project_id: string
        }
        Update: {
          created_at?: string
          device_id?: string
          id?: string
          ip_address?: string | null
          project_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_likes_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          created_at: string | null
          css_content: string | null
          description: string
          display_order: number | null
          download_count: number | null
          download_enabled: boolean | null
          html_content: string
          id: string
          is_featured: boolean | null
          is_template: boolean | null
          js_content: string | null
          like_count: number | null
          preview_url: string | null
          project_status: string | null
          technologies: string[] | null
          template_category: string | null
          template_price: number | null
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          css_content?: string | null
          description: string
          display_order?: number | null
          download_count?: number | null
          download_enabled?: boolean | null
          html_content: string
          id?: string
          is_featured?: boolean | null
          is_template?: boolean | null
          js_content?: string | null
          like_count?: number | null
          preview_url?: string | null
          project_status?: string | null
          technologies?: string[] | null
          template_category?: string | null
          template_price?: number | null
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          css_content?: string | null
          description?: string
          display_order?: number | null
          download_count?: number | null
          download_enabled?: boolean | null
          html_content?: string
          id?: string
          is_featured?: boolean | null
          is_template?: boolean | null
          js_content?: string | null
          like_count?: number | null
          preview_url?: string | null
          project_status?: string | null
          technologies?: string[] | null
          template_category?: string | null
          template_price?: number | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      reports: {
        Row: {
          assigned_to: string | null
          created_at: string
          custom_type: string | null
          description: string
          id: string
          images: string[] | null
          location_lat: number | null
          location_lng: number | null
          notes: string | null
          priority: string
          reporter_name: string
          reporter_phone: string
          status: string
          street_description: string | null
          type: string
          updated_at: string
        }
        Insert: {
          assigned_to?: string | null
          created_at?: string
          custom_type?: string | null
          description: string
          id?: string
          images?: string[] | null
          location_lat?: number | null
          location_lng?: number | null
          notes?: string | null
          priority?: string
          reporter_name: string
          reporter_phone: string
          status?: string
          street_description?: string | null
          type: string
          updated_at?: string
        }
        Update: {
          assigned_to?: string | null
          created_at?: string
          custom_type?: string | null
          description?: string
          id?: string
          images?: string[] | null
          location_lat?: number | null
          location_lng?: number | null
          notes?: string | null
          priority?: string
          reporter_name?: string
          reporter_phone?: string
          status?: string
          street_description?: string | null
          type?: string
          updated_at?: string
        }
        Relationships: []
      }
      site_config: {
        Row: {
          id: number
          show_terminal: boolean | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          show_terminal?: boolean | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          show_terminal?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      site_settings: {
        Row: {
          created_at: string | null
          id: number
          setting_key: string
          setting_value: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          setting_key: string
          setting_value: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          setting_key?: string
          setting_value?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      skills: {
        Row: {
          created_at: string | null
          display_order: number | null
          id: string
          is_active: boolean | null
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          display_order?: number | null
          id?: string
          is_active?: boolean | null
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          display_order?: number | null
          id?: string
          is_active?: boolean | null
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      website_previews: {
        Row: {
          created_at: string
          description: string
          display_order: number
          id: string
          is_active: boolean
          screenshot_url: string | null
          title: string
          updated_at: string
          url: string
        }
        Insert: {
          created_at?: string
          description: string
          display_order?: number
          id?: string
          is_active?: boolean
          screenshot_url?: string | null
          title: string
          updated_at?: string
          url: string
        }
        Update: {
          created_at?: string
          description?: string
          display_order?: number
          id?: string
          is_active?: boolean
          screenshot_url?: string | null
          title?: string
          updated_at?: string
          url?: string
        }
        Relationships: []
      }
    }
    Views: {
      pharmacy_products_v: {
        Row: {
          activity_id: string | null
          activity_name: string | null
          categories: Json | null
          description: string | null
          price: number | null
          product_id: string | null
          product_name: string | null
          sku: string | null
          stock: number | null
          unit: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      increment_download_count: {
        Args: { project_id: string }
        Returns: undefined
      }
      increment_like_count: {
        Args: { project_id: string }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
